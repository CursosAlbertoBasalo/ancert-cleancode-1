// * Entities can be aggregated in complex hierarchies

import type { PaymentVO } from "./2-vo";
import type { Card, Client, Payment } from "./3-entity";

export class ClientAggregate {
  // * a client can have multiple cards
  public readonly cards: Card[] = [];

  // * a client must have at least one card,
  // * a client must have a preferred card
  constructor(
    public readonly client: Client,
    private preferredCard: Card
  ) { }

  public addCard(card: Card, isPreferred: boolean) {
    this.cards.push(card);
    // * ensures that the client always has a card marked as preferred
    if (isPreferred) {
      this.preferredCard = card;
    }
  }

  // * avoids direct access to the cards
  public getPreferredCard() {
    return this.preferredCard;
  }
}

// * a client(with his cards) with his payments
export class ClientPaymentsAggregate {
  // * one client can have multiple payments
  private payments: PaymentVO[] = [];

  // * we can aggregate an entity or another aggregate
  constructor(public readonly client: ClientAggregate) { }

  public performPayment(payment: Payment) {
    const card = this.client.getPreferredCard();
    payment.payWithCard(card);
    this.payments.push(payment.paymentData);
  }
  // * avoids direct access to the payments
  public getPayments(): PaymentVO[] {
    return [...this.payments];
  }
}
