// * A constant value should be defined like any other variable.
// - Could be exceptions for well-known constants like 0, 1 or 100 in certain contexts.

export function calculateDiscount(price: number) {
	// ! where these numbers came from?
	if (price > 1000) {
		return (price * 2) / 100; // ! heads up, anyone can infer 100 si a %
	}
	return (price * 1) / 100;
}
