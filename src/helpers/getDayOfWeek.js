export default function getDayOfWeek(dateString) {
  const parts = dateString.split("-");
  const year = parseInt(parts[2], 10);
  const month = parseInt(parts[1], 10) - 1; // Month is zero-based in JavaScript Date object
  const day = parseInt(parts[0], 10);

  const date = new Date(year, month, day);
  const options = { weekday: "long" };

  return date.toLocaleString("en-US", options).toLowerCase();
}
