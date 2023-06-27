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

export default function Calendar() {
  const [date, setDate] = useState(dayjs());

  const onChange = (newDate) => {
    console.log(newDate.$d);
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
      {hours.map((hour) => (
        <HourSelector
          start={hour.start}
          end={hour.end}
          available={hour.available}
          key={hour.start}
        />
      ))}
    </div>
  );
}
