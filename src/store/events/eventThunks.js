import {
  validateURL,
  bookEvent,
  updateEvent,
  createNewEvent,
  deleteEvent,
  getEvent,
  getUserEvents,
} from "@/firebase/storageProviders";

import {
  pushNewEvent,
  removeEvent,
  setCurrentEvent,
  setStatus,
  setEvents,
} from "./eventSlice";

export const startCreatingNewEvent = (event) => {
  return async (dispatch) => {
    const result = await createNewEvent(event);
    if (result.ok) {
      dispatch(pushNewEvent(result.event));
    }

    dispatch(setStatus(result.error));
  };
};

export const startUpdatingEvent = (event) => {
  return async (dispatch) => {
    const result = await updateEvent(event);
    if (result.ok) {
      dispatch(updateEvent(result.event));
    }

    dispatch(setStatus(result.error));
  };
};

export const startBookingEvent = (eventId, date, time, members) => {
  return async (dispatch) => {
    const result = await bookEvent(eventId, date, time, members);

    if (result.ok) {
      dispatch(setStatus("bookingSuccess"));
      return;
    }

    dispatch(setStatus(result.error));
  };
};

export const startGettingEvent = (eventId) => {
  return async (dispatch) => {
    const result = await getEvent(eventId);

    if (result.ok) {
      dispatch(setCurrentEvent(result.event));
    }

    dispatch(setStatus(result.error));
  };
};

export const startValidatingURL = (url) => {
  return async (dispatch) => {
    const result = await validateURL(url);

    if (result.ok) {
      dispatch(setCurrentEvent(result.event));
      dispatch(setStatus("validURL"));
      return true;
    }

    dispatch(setStatus("invalidURL"));
    return false;
  };
};

export const startDeletingEvent = (eventId) => {
  return async (dispatch) => {
    const result = await deleteEvent(eventId);

    if (result.ok) {
      dispatch(removeEvent(result.event));
    }

    dispatch(setStatus(result.error));
  };
};

export const startFetchingEvents = (uid) => {
  return async (dispatch) => {
    const result = await getUserEvents(uid);

    if (result.ok) {
      dispatch(setEvents(result.events));
      return;
    }

    dispatch(setStatus(result.error));
  };
};
