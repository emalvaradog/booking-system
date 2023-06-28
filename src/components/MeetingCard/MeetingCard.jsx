import { toast } from "react-hot-toast";
import styles from "./meetingCard.module.scss";
import { useState } from "react";

export default function MeetingCard({
  title,
  description,
  eventId,
  sharable = true,
}) {
  const [toggleModal, setTogglemodal] = useState(false);

  function shareEvent() {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(`${window.location.origin}/${eventId}`)
        .then(() => {
          toast.success("Link copiado al portapapeles");
        })
        .catch((error) => {
          toast.error("Hubo un error al copiar el link: ");
        });
    } else {
      toast.error("Hubo un error al copiar el link: ");
    }
  }

  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <p>{description}</p>
      {sharable && (
        <button onClick={shareEvent}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="share"
          >
            <path d="M18,14a4,4,0,0,0-3.08,1.48l-5.1-2.35a3.64,3.64,0,0,0,0-2.26l5.1-2.35A4,4,0,1,0,14,6a4.17,4.17,0,0,0,.07.71L8.79,9.14a4,4,0,1,0,0,5.72l5.28,2.43A4.17,4.17,0,0,0,14,18a4,4,0,1,0,4-4ZM18,4a2,2,0,1,1-2,2A2,2,0,0,1,18,4ZM6,14a2,2,0,1,1,2-2A2,2,0,0,1,6,14Zm12,6a2,2,0,1,1,2-2A2,2,0,0,1,18,20Z"></path>
          </svg>
          Compartir evento
        </button>
      )}
    </div>
  );
}
