import React, { useState, useEffect } from "react";
import styles from "@/styles/Booking.module.scss";
import { format, parse } from "date-fns";
import UserData from "@/components/UserData/UserData";
import Calendar from "@/components/Calendar/Calendar";
import HourSelector from "@/components/HourSelector/HourSelector";
import { useAuthUser, withAuthUser } from "next-firebase-auth";
import Confirmation from "@/components/Confirmation/Confirmation";
import { bookEvent } from "@/firebase/storageProviders";
import {
  startValidatingURL,
  startBookingEvent,
} from "@/store/events/eventThunks";
import { useDispatch, useSelector } from "react-redux";
import calculateAvailableIntervals from "@/helpers/calculateIntervals";
import getDayOfWeek from "@/helpers/getDayOfWeek";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { current } from "@reduxjs/toolkit";

const hours = [
  { start: "08:00", end: "08:30", available: true },
  { start: "09:00", end: "09:30", available: false },
  { start: "09:30", end: "10:00", available: true },
  { start: "10:00", end: "10:30", available: true },
];

export function ClientPage({ slug }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isValid, setIsValid] = useState(false);
  const [showHours, setShowHours] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [client, setClient] = useState({ clientName: "", mail: "" });
  const [hour, setHour] = useState("");
  const [eventId, setEventId] = useState(slug[0]);
  const [hours, setHours] = useState([]);
  const [date, setDate] = useState("");
  const user = useAuthUser();
  const { currentEvent, status } = useSelector((state) => state.events);

  useEffect(() => {
    if (status === "validURL") {
      setIsValid(true);
      return;
    } else if (status === "invalidURL") {
      router.push("/", { shallow: true });
    }
  }, [status]);

  useEffect(() => {
    console.log(client);
  }, [client]);

  useEffect(() => {
    setEventId(slug[0]);
  }, [slug]);

  useEffect(() => {
    dispatch(startValidatingURL(slug[0]));
  }, []);

  const createBooking = (e) => {
    e.preventDefault();

    if (client.clientName == "" || client.mail == "")
      return alert("Por favor ingresa tu nombre y correo");

    try {
      dispatch(startBookingEvent(eventId, date, hour, [client]));
      if (status === "bookingSuccess") {
        toast.success("Reserva realizada con éxito");
        router.push("/");
      } else {
        toast.error("Algo salió mal");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = (start, end) => {
    setConfirmation(true);
    setHour(`${start} - ${end}`);
  };

  const toggleHours = (formatedDate) => {
    setDate(formatedDate);
    const day = getDayOfWeek(formatedDate);
    const hours = calculateAvailableIntervals(
      currentEvent?.availability,
      currentEvent?.booked[formatedDate],
      day
    );

    setHours(hours);
    setShowHours(true);
  };

  return (
    <div className={styles.container}>
      <Toaster />
      {isValid && (
        <>
          <div className={styles.containerUser}>
            <UserData
              title={currentEvent.title}
              image={user.photoURL}
              description={currentEvent.description || "No hay descripción"}
            />
          </div>
          <div className={styles.containerCalendar}>
            <div className={styles.containerCalendarBG}>
              {confirmation ? (
                <Confirmation
                  title={currentEvent.title}
                  date={date}
                  hour={hour}
                  cancel={() => setConfirmation(false)}
                  book={createBooking}
                  setClient={setClient}
                  client={client}
                />
              ) : (
                <>
                  <Calendar toggleHours={toggleHours} />
                  {showHours && (
                    <div className={styles.containerCalendarBGHours}>
                      <p>
                        {format(
                          parse(date, "d-M-yyyy", new Date()),
                          "eee MMM d"
                        )}
                      </p>
                      <div className={styles.containerCalendarBGHoursScroll}>
                        {hours.length === 0 && (
                          <p>No hay horas disponibles para este día</p>
                        )}
                        {hours.map((hour) => (
                          <HourSelector
                            key={hour.start}
                            handleClick={handleClick}
                            {...hour}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const slug = params.slug;

  return {
    props: {
      slug,
    },
  };
}

export default withAuthUser({})(ClientPage);
