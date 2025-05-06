# Blockchain Kata

## Specifications

You need to implement a simple blockchain that can store data in a list of blocs.

A block has the following properties:

- Index: The index of the block in the blockchain.
- Timestamp: The timestamp when the block was created.
- Data: The data that the block stores.
- Previous Hash: The hash of the previous block in the blockchain.
- Hash: The hash of the block. (can be calculated adding the index, timestamp, data length, and previous hash)

There is a special block called the genesis block that has blank data and a hash of `0`. This block is the first block in the blockchain and it is added when the blockchain is created.

The blockchain has the following properties:

- Chain: A list of blocks.
- Timestamp: The timestamp when the blockchain was created or changed.

Any block in the blockchain must have a method to validate itself.

The blockchain has the following methods:

- AddBlock: Adds a block to the chain.
- IsValid: Checks if the blockchain is valid.

### Acceptance Criteria:

```gherkin
Given a blockchain
When the blockchain is created
Then the blockchain has a genesis block
```

```gherkin
Given a blockchain
When a block is added to the blockchain
Then the blockchain has a new block
```

```gherkin
Given a blockchain
When the blockchain is validated
Then the blockchain is valid
```
### Improvements:

- Add a hash to the blockchain itself on creation.

- Block.Hash: The hash of the block is calculated using the SHA256 algorithm.

- Chain.Difficulty: The number of leading zeros that the hash of a block must have to be valid.

- Block.Nonce: A number that is incremented to find a valid hash.

## Clean Implementation Requirements

1 - Use proper naming conventions.

2 - Write simple blocks and instructions.

3 - Keep functions small.

4 - Avoid primitive obsession.

  - Avoid global variables

  - Avoid primitives

  - Prefer composition over inheritance

  - Avoid large structures

  - Encapsulate data and behavior in classes

  - Reduce the number of collaborators of each class.

  - Reduce the number of consumers of each class.

  - Don´t talk to strangers.

  - High cohesion (use your data) and low coupling (need few collaborators)

  - Keep classes small (below 100 instructions)

