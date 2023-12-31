import { startUserLogout } from "@/store/auth/authThunks";
import {
  AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserSSR,
} from "next-firebase-auth";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/styles/App.module.scss";
import { useEffect, useState } from "react";
import {
  startCreatingNewEvent,
  startFetchingEvents,
} from "@/store/events/eventThunks";
import { setUpcomingMeetings } from "@/store/events/eventSlice";
import MeetingCard from "@/components/MeetingCard/MeetingCard";
import AvailabilityForm from "@/components/AvailabilityFOrm/FOrm";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";

export function Index() {
  const { events, upcomingMeetings } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const user = useAuthUser();
  const [screen, setScreen] = useState("events");
  const [createEvent, setCreateEvent] = useState(false);

  useEffect(() => {
    dispatch(startFetchingEvents(user.id));
  }, []);

  useEffect(() => {
    let upcomingMeetings = {};

    events.forEach((event) => {
      for (const date in event.booked) {
        if (upcomingMeetings.hasOwnProperty(date)) {
          upcomingMeetings[date] = upcomingMeetings[date].concat(
            event.booked[date]
          );
        } else {
          upcomingMeetings[date] = event.booked[date];
        }
      }
    });
    dispatch(setUpcomingMeetings(upcomingMeetings));
  }, [events]);

  function handleScreenChange(screen) {
    setScreen(screen);
  }

  function handleCreateEvent(
    availability,
    title,
    description,
    duration = "30"
  ) {
    const newEvent = {
      title,
      description,
      duration,
      availability,
      newMembers: false,
      booked: {},
      uid: user.id,
    };

    try {
      dispatch(startCreatingNewEvent(newEvent));
      toast.success("Evento creado correctamente");
      setCreateEvent(false);
    } catch (error) {
      toast.error("Error al crear el evento");
    }
  }

  function handleLogout() {
    dispatch(startUserLogout());
  }

  return (
    <div className={styles.container}>
      <Toaster />
      <div className={styles.containerMenu}>
        <div className={styles.containerMenuData}>
          <img src={user.photoURL} alt={user.displayName} />
          <h1>{user.displayName}</h1>
        </div>
        <div className={styles.containerMenuOptions}>
          <p
            onClick={() => handleScreenChange("events")}
            className={`${screen === "events" ? styles.active : ""}`}
          >
            Mis eventos
          </p>
          <p
            onClick={() => handleScreenChange("agenda")}
            className={`${screen === "agenda" ? styles.active : ""}`}
          >
            Mi agenda
          </p>
          <p onClick={handleLogout}>Cerrar sesión</p>
        </div>
      </div>
      <div className={styles.containerContent}>
        <div className={styles.containerContentBG}>
          {createEvent ? (
            <AvailabilityForm
              sendForm={handleCreateEvent}
              closeForm={() => setCreateEvent(false)}
            />
          ) : screen === "events" ? (
            <>
              <h1>Mis eventos</h1>
              <button onClick={() => setCreateEvent(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  id="plus"
                >
                  <path
                    fill="none"
                    fill-rule="evenodd"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 1v14M1 8h14"
                  ></path>
                </svg>
                Nuevo evento
              </button>
              <div className={styles.containerContentBGCards}>
                {events.map((event) => (
                  <MeetingCard
                    key={event.id}
                    eventId={event.id}
                    description={event.description}
                    title={event.title}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              <h1>Mi agenda</h1>
              <div className={styles.containerContentBGCards}>
                {Object.keys(upcomingMeetings).map((date) => (
                  <div key={date} className={styles.containerContentBGCardsDay}>
                    <h1>{date}</h1>
                    {upcomingMeetings[date].map((event) => (
                      <MeetingCard
                        key={`${event.start}-${event.end}`}
                        title={`Reunión con ${event.members[0].clientName}`}
                        description={`(${event.members[0].email}) de ${event.start} a ${event.end}`}
                        sharable={false}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = withAuthUserSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
  whenAuthed: AuthAction.RENDER,
})();

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  whenUnauthedBeforeInit: AuthAction.REDIRECT_TO_LOGIN,
})(Index);
