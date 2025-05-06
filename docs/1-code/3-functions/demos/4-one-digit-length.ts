// * short functions are easier to understand, test and maintain

// ! long function, doing multiple things
function calculateDiscount(booking: Booking) {
	// ! how is this working?
	// ! needs 4 dependencies how can I test it?
	let discount = 0;
	if (booking.passengers.length > 2) {
		discount += 5;
  }
  // Get payment method

	const payment = getPaymentByBookingId(booking.id);
	if (payment.method === "cash") {
		discount += 5;
  }
  // Get client
	const client = getClientById(booking.clientId);
	if (client.isVip) {
		discount += 10;
  }
  // Get trip
	const trip = getTripById(booking.tripId);
	const season = getTripSeason(trip);
	if (season === "winter") {
		discount += 10;
  }
  // Calculate discount
	const totalDiscount = (discount * booking.price) / 100;
	return totalDiscount;
}

type Booking = {
	id: string;
	tripId: string;
	clientId: string;
	price: number;
	passengers: unknown[];
};

function getPaymentByBookingId(bookingId: string) {
	return {
		method: "cash",
	};
}
function getClientById(clientId: string) {
	return {
		isVip: true,
	};
}
function getTripById(tripId: string) {
	return "";
}
function getTripSeason(trip: string) {
	return "winter";
}