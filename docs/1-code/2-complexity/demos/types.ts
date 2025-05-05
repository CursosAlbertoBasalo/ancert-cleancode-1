export type Client = {
	id: string;
	status: "VIP" | "regular" | "defaulter";
	orders: Order[];
};

export type Order = {
	id: string;
	status: "pending" | "completed";
	date: Date;
	lines: OrderLine[];
};

export type OrderLine = {
	product: string;
	quantity: number;
	price: number;
};

export type Shipment = {
	orderId: string;
	lines: OrderLine[];
};

export type Invoice = {
	orderId: string;
	date: Date;
	clientId: string;
	subTotal: number;
	discount: number;
	tax: number;
	total: number;
};