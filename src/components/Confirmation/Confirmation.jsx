import styles from "./confirmation.module.scss";

export default function Confirmation({
  title,
  date,
  hour,
  cancel,
  book,
  setClient,
  client,
}) {
  function handleChange(e) {
    setClient({ ...client, [e.target.name]: e.target.value });
  }

  return (
    <div className={styles.modal}>
      <svg
        onClick={cancel}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="cancel"
      >
        <path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
      </svg>
      <h1>{title}</h1>
      <div className={styles.form}>
        <p>Fecha: {date}</p>
        <p>Hora: {hour}</p>
        <form>
          <input
            onChange={handleChange}
            value={client.clientName}
            name="clientName"
            type="text"
            placeholder="Nombre"
          />
          <input
            onChange={handleChange}
            value={client.mail}
            type="text"
            name="mail"
            placeholder="Correo"
          />
          <button onClick={book}>Agendar</button>
        </form>
      </div>
    </div>
  );
}
