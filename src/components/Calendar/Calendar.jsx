"use client";

import { useEffect, useState } from "react";
import styles from "./calendar.module.scss";
import DatePicker, { TimePicker } from "sassy-datepicker";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import HourSelector from "../HourSelector/HourSelector";

const hours = [
  { start: "08:00", end: "08:30", available: true },
  { start: "09:00", end: "09:30", available: false },
  { start: "09:30", end: "10:00", available: true },
  { start: "10:00", end: "10:30", available: true },
];

export default function Calendar({ toggleHours }) {
  const [date, setDate] = useState(dayjs());

  const onChange = (newDate) => {
    console.log(newDate.$d);
    toggleHours(newDate.$d);
    setDate(newDate);
  };

  return (
    <div>
      <DateCalendar
        disablePast
        value={date}
        onChange={onChange}
        views={["day"]}
      />
    </div>
  );
}
