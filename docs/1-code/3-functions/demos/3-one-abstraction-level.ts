// * Don't mix low-level and high-level code

function getAvailablePlaces(tripId: string): string {
  // ! low-level knowledge exposed
  const db = new Database();
	const queryTrips = `select capacity from trips where tripId=${tripId}`;
	const capacity = db.select(queryTrips);
	const queryBookings = `select sum(seats) from bookings where tripId=${tripId}`;
	const tripBookedSeats = db.select(queryBookings);
	// ! mixed with enterprise rules
	const free = capacity - tripBookedSeats;
	const OVERBOOKING_FACTOR = 1.05;
  const available = free * OVERBOOKING_FACTOR;
  // ! mixed with presentation
  if (available <= 0) {
    return "No places available";
  }
  if (available <= 3) {
    return "Hurry up! Only a few places left";
  }
  return `There are ${available} places available`;
}

class Database {
	select(query: string) {
		return 0;
	}
}
