// * Less arguments, do less things

function saveTripBooking(
	clientBooking: object,
	paymentData: object,
	confirmationMessage: object,
) {
	// ! make payment
	console.log("making a payment with", paymentData);
	// ! save booking
	console.log("saving booking", clientBooking);
	// ! send a confirmation email
	console.log("sending a confirmation email", confirmationMessage);
}

// * Less arguments, less error-prone
function sendMessage(
	senderName: string,
	senderAddress: string,
	recipientAddress: string,
	subject: string,
	body: string,
) {
	// ! multiple similar parameters are error-prone
}

// * Avoid flag arguments

function calculateMortgage(
	loanAmount: number,
	interestRate: number,
	loanTerm: number,
	loanType: string,
) {
	if (loanType === "fixed") {
		// ! calculate fixed mortgage
	} else {
		// ! calculate variable mortgage
	}
}
