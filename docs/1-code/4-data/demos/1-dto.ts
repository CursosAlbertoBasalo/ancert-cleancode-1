// * DTOs (Data Transfer Objects)
// * are used to define the shape of the data that is being transferred between the client and the server.
// * But also, they define the shape of any data transferred inside the application.

// ! Still No validation, no constraints

interface ClientDTO {
	name: string;
	country: string;
	city: string;
}

interface PaymentDTO {
	amount: number;
	isDeferred: boolean;
	deferredMonths: number;
	isRecurred: boolean;
}

interface CardDTO {
	number: string;
	validUntil: string;
	verificationCode: number;
}
