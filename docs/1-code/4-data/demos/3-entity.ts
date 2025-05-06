// * Entities do more than just manipulate data

// ! but still they don`t enforce relationship constraints

import { type CardVO, type ClientVO, PaymentVO } from "./2-vo";

export class Client {
	// * can have more info than the VO
	readonly deferredMonths = 3;
	readonly isDeferred = true;
	readonly isRecurred = false;

	constructor(public readonly clientData: ClientVO) {}

	public generatePayment(amount: number): Payment {
		const paymentData = new PaymentVO(
			this.isDeferred,
			amount,
			this.deferredMonths,
			this.isRecurred,
		);
		// * an entity can create other entities
		return new Payment(paymentData);
	}
}

export class Payment {
	constructor(public readonly paymentData: PaymentVO) {}

	// * business logic
	public payWithCard(card: Card) {
		// * an entity can use other entities
		const cardMasked = card.getMaskedNumber();
		if (card.isExpired()) {
			throw new Error(`Card ${cardMasked} is expired`);
		}
		card.checkCardLimit(this.paymentData.amount);
		console.log(`Charged ${this.paymentData.amount} on card ${cardMasked}`);
	}
}

export class Card {
	constructor(private readonly cardData: CardVO) {}

	// * Encapsulates data and exposes the logic

	public getMaskedNumber() {
		return this.cardData.getMaskedNumber();
	}

	public isExpired(): boolean {
		return this.cardData.getExpirationDate() < new Date();
	}

	public checkCardLimit(amount: number) {
		const cardLimit = 1000; // Suppose this is gotten from a service
		if (amount > cardLimit) {
			throw new Error("Card limit exceeded");
		}
	}
}
