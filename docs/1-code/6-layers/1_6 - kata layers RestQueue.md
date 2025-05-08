# RestQueue Kata

## Specifications

You need to implement a simple queue (FIFO) exposed as a REST API.

The API endpoints are:

- `GET /queue`: Returns the next item in the queue or 204 if the queue is empty.

- `POST /queue`: Adds an item to the queue.

The server can store the queue in memory or in a json file.

The items in the queue are wrappers around a payload that can be any JSON object.

The payload should be limited to a configurable size in bytes.

The items in the queue have the following properties:

- ID: The unique identifier of the item.
- Payload: The payload of the item.
- Timestamp: The timestamp when the item was added to the queue.

### Acceptance Criteria:

```gherkin
Given a queue
When no items are in the queue
And the queue is requested
Then the queue is empty
```

```gherkin
Given a queue
When an item is added to the queue
And the queue is requested
Then the queue has the new item
```

```gherkin
Given a queue
When an item is added to the queue
And the queue is requested
When the queue is requested again
Then the queue is empty
```

### Improvements:

- Allow for multiple queues, using the queue id in the URL schema like `/queue/:id`. The API endpoints then become:

  - `GET /queue` To get the list of queues.
  - `POST /queue` To create a new queue.
  - `GET /queue/:id` To get the next item in this particular queue.
  - `POST /queue/:id` To add an item to this particular queue.
  - `DELETE /queue/:id` To delete this particular queue.

- Add an expiration time to the items in the queue. If an item is not retrieved in a configurable time, it is automatically removed from the queue.

## Clean Implementation Requirements

1 - Use proper naming conventions.

2 - Write simple blocks and instructions.

3 - Keep functions small.

4 - Avoid primitive obsession.

5 - Respect the SOLID principles.

6 - Apply a layer separation architecture.

  - Avoid complex dependency graphs between classes.

  - Classes are encapsulated in modules.

  - Modules should solve a business or technical concern.

  - Take care of the dependency flow between modules.

  - Start with a layered architecture, and evolve it as needed.

  - Use tools to enforce layering rules.
