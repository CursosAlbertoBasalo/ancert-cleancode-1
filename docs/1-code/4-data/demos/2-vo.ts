// * Enforce invariant rules that ensure data quality

// * Value Objects (VO) are immutable objects that represent a value in the domain model.

// ! no business logic

export class ClientVO {
	// * immutable data
	public readonly name: string;
	public readonly country: string;
	public readonly city: string;

	// * Representation of data
	public toString() {
		return `${this.name} - ${this.city}, ${this.country}`;
	}
}

export class PaymentVO {
	public readonly isDeferred: boolean;
	public readonly amount: number;
	public readonly deferredMonths: number;
	public readonly isRecurred: boolean;

	// * Validation and constraints
	constructor(
		isDeferred: boolean,
		amount: number,
		deferredMonths: number,
		isRecurred: boolean,
	) {
		if (isDeferred && deferredMonths <= 0) {
			throw new Error("Deferred months must be greater than 0");
		}
		if (isDeferred && isRecurred) {
			throw new Error("Recurred payment cannot be deferred");
		}
		if (amount < 0) {
			throw new Error("Amount cannot be negative");
		}
		this.isDeferred = isDeferred;
		this.amount = amount;
		this.deferredMonths = deferredMonths;
		this.isRecurred = isRecurred;
	}
}

export class CardVO {
	// * immutable data
	public readonly number: string;
	public readonly validUntil: string;
	public readonly verificationCode: number;

	// * Validation and constraints
	constructor(number: string, validUntil: string, verificationCode: number) {
		if (number.length !== 16) {
			throw new Error("Card number must have 16 digits");
		}
		if (!/^\d+$/.test(number)) {
			throw new Error("Card number must have only digits");
		}
		if (!/^\d{2}\/\d{2}$/.test(validUntil)) {
			throw new Error("Card valid until must be MM/YY");
		}
		if (verificationCode < 0) {
			throw new Error("Verification code must be positive");
		}
		this.number = number;
		this.validUntil = validUntil;
		this.verificationCode = verificationCode;
	}

	// * Representation of data
	public getMaskedNumber() {
		return `**** **** **** ${this.number.slice(-4)}`;
	}

	// * Domain knowledge with its own data
	public getExpirationDate(): Date {
		const [cardMonth, cardYear] = this.validUntil.split("/");
		const year = Number.parseInt(cardYear, 10) + 2000;
		const month = Number.parseInt(cardMonth, 10) - 1;
		const nextMonth = month + 1;
		return new Date(year, nextMonth, 1);
	}
}
