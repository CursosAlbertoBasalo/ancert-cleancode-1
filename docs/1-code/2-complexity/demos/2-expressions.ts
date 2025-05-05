// * Write simple expressions

function calculateTotalPrice(
	quantity: number,
	price: number,
  taxRate: number,
  isVip: boolean,
  freeShipping: boolean
): number {
  const vipDiscount = 0.1;
  const unitShipCost = 10;
  // ! have temporary step variables for readability (and debugging)
	return (quantity * (price * (isVip ? (1 - vipDiscount) : 1)) + (freeShipping ? 0 : unitShipCost)) * (1 + taxRate / 100);
}
