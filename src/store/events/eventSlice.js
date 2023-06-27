const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  events: [],
  upcomingMeetings: [],
  pastMeetings: [],
  status: "",
};

export const eventSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    setEvents: (state, { payload }) => {
      state.meetings = payload;
    },
    setUpcomingMeetings: (state, { payload }) => {
      state.upcomingMeetings = payload;
    },
    setPastMeetings: (state, { payload }) => {
      state.pastMeetings = payload;
    },
    clearEvents: (state) => {
      state.meetings = [];
      state.upcomingMeetings = [];
      state.pastMeetings = [];
    },
    removeEvent: (state, { payload }) => {
      state.meetings = state.meetings.filter(
        (meeting) => meeting.id !== payload
      );
    },
    pushNewEvent: (state, { payload }) => {
      state.meetings.push(payload);
    },
    updateEvent: (state, { payload }) => {
      const index = state.meetings.findIndex(
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
} = eventSlice.actions;
