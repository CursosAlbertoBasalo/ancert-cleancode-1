// ! Open/Closed Principle, a switch statement is a violation of the OCP

export type PaymentMethod = "credit" | "transfer" | "paypal";

export class Payments {
	pay(method: PaymentMethod, paymentInfo: unknown) {
		switch (method) {
			case "credit":
				console.log("pay with credit card", paymentInfo);
				break;
			case "transfer":
				console.log("pay with bank transfer", paymentInfo);
				break;
			case "paypal":
				console.log("pay with paypal", paymentInfo);
				break;
			default:
				throw new Error("Invalid payment method");
		}
	}
}

// * Different payment methods should be implemented in separate classes

export interface Payment {
	pay(paymentInfo: unknown): void;
}

export class CreditCardPayment implements Payment {
	pay(paymentInfo: unknown) {
		console.log("pay with credit card", paymentInfo);
	}
}
export class BankTransferPayment implements Payment {
	pay(paymentInfo: unknown) {
		console.log("pay with bank transfer", paymentInfo);
	}
}
export class PaypalPayment implements Payment {
	pay(paymentInfo: unknown) {
		console.log("pay with paypal", paymentInfo);
	}
}

// * A factory pattern can be used to create the payment method
// By using lookup object, we can add new payment methods without modifying the existing code
// For example, if we want to add a new payment method, we can simply add a new class and add it to the lookup object
// paymentMethods.push({ method: "newMethod", create: () => new NewPaymentMethod() });

const paymentMethods: { [key in PaymentMethod]: () => Payment } = {
	credit: () => new CreditCardPayment(),
	transfer: () => new BankTransferPayment(),
	paypal: () => new PaypalPayment(),
};

export function createPaymentMethod(method: PaymentMethod) {
	const createMethod = paymentMethods[method];
	if (createMethod) {
		return createMethod();
	}
	throw new Error("Invalid payment method");
}
