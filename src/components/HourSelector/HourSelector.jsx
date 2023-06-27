"use client";

import { useEffect } from "react";
import styles from "./hourSelector.module.scss";

export default function HourSelector({ start, end, available }) {
  return (
    <button className={`${styles.button} ${!available ? styles.inactive : ""}`}>
      <p>{`${start} - ${end}`}</p>
    </button>
  );
}
