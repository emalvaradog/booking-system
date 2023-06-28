export default function calculateAvailableIntervals(availability, booked, day) {
  const availableIntervals = [];

  const dayAvailability = availability[day];

  if (
    !dayAvailability ||
    !Array.isArray(dayAvailability) ||
    dayAvailability.length === 0
  ) {
    return availableIntervals;
  }

  // Combine all availability intervals for the specified day
  const combinedAvailability = combineIntervals(dayAvailability);

  // Generate all possible time intervals within the combined availability for the specified day
  const startTime = new Date(`2000-01-01T${combinedAvailability.start}`);
  const endTime = new Date(`2000-01-01T${combinedAvailability.end}`);
  const intervalMinutes = 30;

  let current = new Date(startTime);

  while (current <= endTime) {
    const startTimeStr = formatTime(current);
    const endTimeStr = formatTime(
      new Date(current.getTime() + intervalMinutes * 60000)
    );

    availableIntervals.push({
      start: startTimeStr,
      end: endTimeStr,
      available: true,
    });

    current = new Date(current.getTime() + intervalMinutes * 60000);
  }

  // Mark booked intervals as unavailable
  if (booked && Array.isArray(booked)) {
    for (const booking of booked) {
      const startBooking = new Date(`2000-01-01T${booking.start}`);
      const endBooking = new Date(`2000-01-01T${booking.end}`);

      for (const interval of availableIntervals) {
        const startInterval = new Date(`2000-01-01T${interval.start}`);
        const endInterval = new Date(`2000-01-01T${interval.end}`);

        if (startBooking >= startInterval && endBooking <= endInterval) {
          interval.available = false;
        }
      }
    }
  }

  return availableIntervals;
}

function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
}

function combineIntervals(intervals) {
  if (!Array.isArray(intervals) || intervals.length === 0) {
    return null;
  }

  let combinedStart = intervals[0].start;
  let combinedEnd = intervals[0].end;

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];

    if (interval.start < combinedStart) {
      combinedStart = interval.start;
    }

    if (interval.end > combinedEnd) {
      combinedEnd = interval.end;
    }
  }

  return { start: combinedStart, end: combinedEnd };
}

// // Example usage
// const availability = {
//   monday: [
//     { start: "09:00", end: "13:00" },
//     { start: "15:00", end: "17:00" },
//   ],
//   thursday: [{ start: "09:00", end: "12:00" }],
//   tuesday: [{ start: "10:00", end: "11:00" }],
// };

// const booked = {
//   "28-06-2023": [
//     {
//       start: "09:00",
//       end: "09:30",
//       members: [{ name: "John Doe", email: "john@mai.com" }],
//     },
//   ],
// };

// const day = "wednesday";
// const availableIntervals = calculateAvailableIntervals(
//   availability,
//   booked["29-06-2023"],
//   day
// );

// console.log(availableIntervals.length);
