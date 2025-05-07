// ! Dependency Inversion Principle, is sometimes defined on top of the OCP and IoC principles

import { type Payment, createPaymentMethod } from "./2-Ocp";

// * The BookingsService class is now decoupled from the Payments classes
class BookingsService {
	// * Can be injected with any class that implements the Payment interface
	constructor(private payment: Payment) {}

	book(activity: unknown, client: unknown, places: number) {
		console.log("validate places");
		const amount = 0; // calculate amount
		const booking = {
			activity,
			client,
			places,
			amount,
			status: "pending",
		};
		this.payment.pay(booking);
	}
}

// * The control goes to the caller, which decides which payment method to use
const paymentMethod = createPaymentMethod("credit");
const bookingsService = new BookingsService(paymentMethod);
// * The BookingsService is used without knowing which payment method is used
bookingsService.book("activity", "client", 2);
