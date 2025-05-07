// ! SOLID - SRP, a class should have only one reason to change

export type Booking = {
	activity: unknown;
	client: unknown;
	places: number;
	amount: number;
	status: "pending" | "confirmed" | "cancelled";
};

export class Bookings {
	create(activity: unknown, client: unknown, places: number): Booking {
		console.log("validate places");
		const amount = 0; // calculate amount
		return {
			activity,
			client,
			places,
			amount,
			status: "pending",
		};
	}
	save(booking: Booking) {
		booking.status = "confirmed";
		console.log("Booking saved", booking);
	}
}

// * Separation of concerns

export class BookingsService {
	create(activity: unknown, client: unknown, places: number): Booking {
		console.log("validate places");
		const amount = 0; // calculate amount
		return {
			activity,
			client,
			places,
			amount,
			status: "pending",
		};
	}
}

export class BookingsRepository {
	save(booking: Booking) {
		booking.status = "confirmed";
		console.log("Booking saved", booking);
	}
}
