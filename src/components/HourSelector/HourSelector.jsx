"use client";

import styles from "./hourSelector.module.scss";

export default function HourSelector({ start, end, available, handleClick }) {
  const onClick = (e) => {
    if (!available) return;
    handleClick(start, end);
  };

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${!available ? styles.inactive : ""}`}
    >
      <p>{`${start} - ${end}`}</p>
    </button>
  );
}
