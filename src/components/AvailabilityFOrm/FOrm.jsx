import React, { useState } from "react";
import {
  createTheme,
  ThemeProvider,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Button,
} from "@mui/material";

import styles from "./form.module.scss";

const availability = {};

const daysOfWeek = [
  { name: "Monday", value: "monday" },
  { name: "Tuesday", value: "tuesday" },
  { name: "Wednesday", value: "wednesday" },
  { name: "Thursday", value: "thursday" },
  { name: "Friday", value: "friday" },
  { name: "Saturday", value: "saturday" },
  { name: "Sunday", value: "sunday" },
];

const theme = createTheme({
  typography: {
    fontSize: 20, // Adjust the font size here
  },
});

const AvailabilityForm = ({ sendForm, closeForm }) => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleDayChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedDays((prevSelectedDays) => [...prevSelectedDays, value]);
    } else {
      setSelectedDays((prevSelectedDays) =>
        prevSelectedDays.filter((day) => day !== value)
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Construct the availability object
    selectedDays.forEach((day) => {
      if (!availability[day]) {
        availability[day] = [];
      }
      availability[day].push({ start: startTime, end: endTime });
    });

    // Print the availability object
    sendForm(availability, title, description);

    // Clear the form
    setSelectedDays([]);
    setStartTime("");
    setEndTime("");
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formHeader}>
          <h1>Crear evento</h1>
          <svg
            onClick={closeForm}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="close"
          >
            <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
          </svg>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="title"
              label="Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="description"
              label="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              multiline
              fullWidth
            />
          </Grid>
          {daysOfWeek.map((day) => (
            <Grid item xs={6} sm={4} key={day.value}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedDays.includes(day.value)}
                    onChange={handleDayChange}
                    value={day.value}
                  />
                }
                label={day.name}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <TextField
              id="start-time"
              label="Start Time"
              type="time"
              value={startTime}
              onChange={(event) => setStartTime(event.target.value)}
              inputProps={{ step: 300 }} // 5-minute intervals
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="end-time"
              label="End Time"
              type="time"
              value={endTime}
              onChange={(event) => setEndTime(event.target.value)}
              inputProps={{ step: 300 }} // 5-minute intervals
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </ThemeProvider>
  );
};

export default AvailabilityForm;
