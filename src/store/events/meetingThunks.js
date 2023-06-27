import { pushNewEvent, removeEvent, setStatus } from "./eventSlice";

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
      dispatch(updateEvent(result.event));
    }

    dispatch(setStatus(result.error));
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
    const result = await fetchEvents(uid);

    if (result.ok) {
      dispatch(setEvents(result.events));
    }

    dispatch(setStatus(result.error));
  };
};
