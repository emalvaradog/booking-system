const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  meetings: [],
  upcomingMeetings: [],
  pastMeetings: [],
};

export const meetingSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    setMeetings: (state, { payload }) => {
      state.meetings = payload;
    },
    setUpcomingMeetings: (state, { payload }) => {
      state.upcomingMeetings = payload;
    },
    setPastMeetings: (state, { payload }) => {
      state.pastMeetings = payload;
    },
    clearMeetings: (state) => {
      state.meetings = [];
      state.upcomingMeetings = [];
      state.pastMeetings = [];
    },
    pushNewMeeting: (state, { payload }) => {
      state.meetings.push(payload);
    },
    updateMeeting: (state, { payload }) => {
      const index = state.meetings.findIndex(
        (meeting) => meeting.id === payload.id
      );
      state.meetings[index] = payload;
    },
  },
});

export const {
  setMeetings,
  setUpcomingMeetings,
  setPastMeetings,
  clearMeetings,
  pushNewMeeting,
  updateMeeting,
} = meetingSlice.actions;
