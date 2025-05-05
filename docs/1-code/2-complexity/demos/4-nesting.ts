// * Avoid nest callbacks and ternary operators

import { Client, Invoice } from "./types";
// Simulating an async function to get clients
const getClients = (): Promise<Client[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
      resolve([{ id: '1', status: 'VIP', orders: [] }]);
		}, 1000);
	});
};

// Simulating an async function to get invoices for a client
const getInvoicesForClient = (client: string): Promise<Invoice[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
      resolve([{
        orderId: '1',
        date: new Date(),
        clientId: client,
        subTotal: 1000,
        discount: 100,
        tax: 200,
        total: 1100
      }]);
		}, 1000);
	});
};

function main() {
	getClients().then(async (clients) => {
		for (const client of clients) {
      getInvoicesForClient(client.id).then((invoices) => {
        // ! arrows inside arrows inside arrows...
        invoices.forEach((invoice) => {
          // ! are you sure of this logic?
          const shipment = client.status === 'defaulter' ? 'none': client.status === 'VIP' ? 'deluxe' : invoice.total > 1000 ? 'express' : 'regular';
          console.log(`Shipment ${shipment} for invoice ${invoice.date}`);
					console.log(`Invoice ${invoice} for ${client}`);
				});
			});
		}
	});
}

main();
