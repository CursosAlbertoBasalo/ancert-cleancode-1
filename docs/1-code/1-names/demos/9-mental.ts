// * Avoid mental overhead, be explicit with your variable names

const customers = ["John Doe", "Jane Doe", "Jim Doe"];
const cn = customers.length;

for (const c of customers) {
	// ! if this block grows, c is not descriptive anymore
	console.log("send invoices to", c);
}

for (let i = 0; i < cn; i++) {
	// ! what was the meaning of cn?
	console.log("send invoices to", customers[i]); // ! i is ok, anyone can infer it means index
}
