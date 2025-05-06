// * A function should do one thing and do it well

type Booking = {
	tripId: string;
	price: number;
};
// ! this function is doing more than one thing
export function saveBooking(booking: Booking): number {
  const db = new Database();
  getDiscountBooking(booking); // ! mutation
	db.insertBooking(booking); // ! doing the main thing
	return db.selectAvailableSeats(booking.tripId); // ! question?
}

function getDiscountBooking(booking: Booking): number {
	const discount = booking.price * 0.1;
	booking.price = booking.price - discount; // ! mutation
	return discount; // ! ask or tell, but not both
}

class Database {
	insertBooking(booking: Booking) {}
	selectAvailableSeats(tripId: string) {
		return 0;
	}
}
