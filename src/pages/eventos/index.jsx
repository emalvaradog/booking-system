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
import { startFetchingEvents } from "@/store/events/eventThunks";
import { setUpcomingMeetings } from "@/store/events/eventSlice";
import MeetingCard from "@/components/MeetingCard/MeetingCard";
import AvailabilityForm from "@/components/AvailabilityFOrm/FOrm";

export function Index() {
  const { events } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const user = useAuthUser();
  const [screen, setScreen] = useState("events");
  const [createEvent, setCreateEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({ availability: {} });

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

  function handleLogout() {
    dispatch(startUserLogout());
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerMenu}>
        <div className={styles.containerMenuData}>
          <img src={user.photoURL} alt={user.displayName} />
          <h1>{user.displayName}</h1>
        </div>
        <div className={styles.containerMenuOptions}>
          <p>Mis eventos</p>
          <p>Mi agenda</p>
        </div>
      </div>
      <div className={styles.containerContent}>
        <div className={styles.containerContentBG}>
          {createEvent ? (
            <AvailabilityForm availability={newEvent.availability} />
          ) : (
            <>
              <h1>Mis eventos</h1>
              <button onClick={() => setCreateEvent(true)}>Nuevo evento</button>
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
