const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  currentEvent: {},
  events: [],
  upcomingMeetings: {},
  pastMeetings: [],
  status: "",
};

export const eventSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    setCurrentEvent: (state, { payload }) => {
      state.currentEvent = payload;
    },
    setEvents: (state, { payload }) => {
      state.events = payload;
    },
    pushUpcomingMeeting: (state, { payload }) => {
      state.upcomingMeetings.push(payload);
    },
    setUpcomingMeetings: (state, { payload }) => {
      state.upcomingMeetings = payload;
    },
    setPastMeetings: (state, { payload }) => {
      state.pastMeetings = payload;
    },
    clearEvents: (state) => {
      state.events = [];
      state.upcomingMeetings = {};
      state.pastMeetings = [];
    },
    removeEvent: (state, { payload }) => {
      state.events = state.meetings.filter((meeting) => meeting.id !== payload);
    },
    pushNewEvent: (state, { payload }) => {
      state.events.push(payload);
    },
    updateEvent: (state, { payload }) => {
      const index = state.events.findIndex(
        (meeting) => meeting.id === payload.id
      );
      state.meetings[index] = payload;
    },
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
  },
});

export const {
  setEvents,
  setUpcomingMeetings,
  setPastMeetings,
  clearEvents,
  pushNewEvent,
  updateEvent,
  setStatus,
  removeEvent,
  setCurrentEvent,
} = eventSlice.actions;
