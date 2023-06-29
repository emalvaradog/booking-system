import {
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  query,
  getDocs,
  where,
  FieldValue,
} from "firebase/firestore";
import { FirebaseDB } from "./config";

// {
//   title: "",
//   description: "",
//   duration: "30",
//   newMembers: true,
//   availability: {
//     monday: [
//       { start: "09:00", end: "13:00" },
//       { start: "14:00", end: "17:00" },
//     ],
//     tuesday: [
//       { start: "09:00", end: "10:00" },
//       { start: "15:00", end: "17:00" },
//     ],
//     wednesday: [{ start: "09:00", end: "17:00" }],
//     thursday: [{ start: "09:00", end: "17:00" }],
//     friday: [{ start: "09:00", end: "17:00" }],
//   },
//   booked: {
//     "2021-10-01": [
//       {
//         start: "09:00",
//         end: "10:00",
//         members: [{ name: "John Doe", email: "john@mail.com" }],
//       },
//     ],
//   },
// };

export const validateURL = async (url) => {
  // Validate if url (url is event id) exists in database
  console.log(url);
  const eventRef = doc(FirebaseDB, "events", url);
  const eventDoc = await getDoc(eventRef);

  if (eventDoc.exists()) {
    return {
      ok: true,
      event: await eventDoc.data(),
    };
  }

  return {
    ok: false,
    error: "Event does not exist",
  };
};

export const createNewEvent = async ({
  title,
  description,
  duration,
  availability,
  newMembers,
  uid,
}) => {
  try {
    const newEventRef = doc(collection(FirebaseDB, "events"));

    const newEvent = {
      title,
      description,
      availability,
      duration,
      newMembers,
      booked: {},
      uid,
      id: newEventRef.id,
    };

    await setDoc(newEventRef, newEvent);

    return {
      ok: true,
      event: newEvent,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
};

export const updateEvent = async (updatedEvent) => {
  try {
    const eventRef = doc(FirebaseDB, "events", updatedEvent.eventId);

    await setDoc(eventRef, updatedEvent);

    return {
      ok: true,
      event: updatedEvent,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
};

export const bookEvent = async (eventId, date, time, members) => {
  try {
    const eventRef = doc(FirebaseDB, "events", eventId);

    const event = await getDoc(eventRef);

    const data = event.data();

    // if date exists, push to array
    if (data.booked[date]) {
      // Validate if time is already booked
      const isBooked = data.booked[date].find((bookedTime) => {
        return (
          (time.start >= bookedTime.start && time.start < bookedTime.end) ||
          (time.end > bookedTime.start && time.end <= bookedTime.end)
        );
      });

      // if time is already booked, return error
      if (isBooked) {
        return {
          ok: false,
          error: "This time is already booked",
        };
      }

      await updateDoc(eventRef, {
        [`booked.${date}`]: FieldValue.arrayUnion({
          start: time.start.trim(),
          end: time.end.trim(),
          members,
        }), 
      });

    } else {
      // if date doesn't exist, create new array

      await setDoc(
        eventRef,
        {
          booked: {
            [date]: [
              {
                start: time.split("-")[0].trim(),
                end: time.split("-")[1].trim(),
                members,
              },
            ],
          },
        },
        { merge: true }
      );
    }

    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const eventRef = doc(FirebaseDB, "events", eventId);

    await setDoc(eventRef, { deleted: true }, { merge: true });

    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
};

export const getEvent = async (eventId) => {
  try {
    const eventRef = doc(FirebaseDB, "events", eventId);

    const event = await eventRef.get();

    return {
      ok: true,
      event: event.data(),
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
};

export const getUserEvents = async (uid) => {
  try {
    const userEvents = [];
    const eventsRef = collection(FirebaseDB, "events");

    const q = query(eventsRef, where("uid", "==", uid));

    const events = await getDocs(q);

    events.docs.forEach((doc) => {
      userEvents.push(doc.data());
    });

    return {
      ok: true,
      events: userEvents,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
};
