# LogS Kata 

## Specifications

You need to implement a simple logging system that can store logs in a list of entries. 

The log entry has the following properties:

- Timestamp: The timestamp when the log was created.
- Level: The level of the log (DEBUG, INFO, WARN, ERROR).
- Message: The message of the log.

The log can write to the console, to a file or both.

Levels are ranked and the log can be configured to write only logs of a certain rank level or higher.


### Acceptance Criteria:

```gherkin
Given a log
When a log entry is added
Then the log has the new entry
```

```gherkin
Given a log configured to write above level WARN
When a log entry of level INFO is added
Then the log does not have the new entry
```

```gherkin
Given a log configured to write to a file
When a log entry is added
Then the log file has the new entry
```

### Improvements:

- The log can change the format of the log entry.

- The log can write to any other destination (http...).

- The log can have different ranks for different destinations (ex: only write errors to file).

## Clean Implementation Requirements

1 - Use proper naming conventions.

2 - Write simple blocks and instructions.

3 - Keep functions small.

4 - Avoid primitive obsession.

5 - Respect the SOLID principles.

  - A class should only have one job or responsibility.

  - Add new functionality to a class without changing its existing code.

  - Prefer composition over inheritance.

  - Create small, specific interfaces to define the behavior and decouple the classes.

  - Depend on abstractions, not on concrete implementations. 
