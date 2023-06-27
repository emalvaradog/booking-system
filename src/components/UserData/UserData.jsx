import React from "react";
import styles from "./userData.module.scss";

export default function UserData({ name, description, image }) {
  return (
    <div className={styles.container}>
      <img src={image} alt={name} />
      <div className={styles.containerData}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
