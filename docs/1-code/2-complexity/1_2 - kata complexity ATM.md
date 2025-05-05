# Automatic Teller Machine (ATM) Kata

## Specifications

You need to implement a simple ATM machine that allows th user to withdraw money. 

It will use the following denominations: 100, 50, 20, 10, 5.

The ATM will only allow the user to withdraw an exact amount requested.

The ATM will use the least amount of bills possible to fulfill the request.

The maximum amount that can be withdrawn is 1000.


### Acceptance Criteria:

```gherkin
Given the ATM has a balance of 5000
When the user requests 1000
Then the ATM dispenses 10 bills of 100
```

```gherkin
Given the ATM has a balance of 5000
When the user requests 150
Then the ATM dispenses 1 bill of 100 and 1 bill of 50
```

```gherkin
Given the ATM has a balance of 5000
When the user requests 125
Then the ATM dispenses 1 bill of 100, 1 bill of 20 and 1 bill of 5
```

```gherkin
Given the ATM has a balance of 5000
When the user requests 1001
Then the ATM displays an error message
```

### Improvements:

- Limit the total amount of the ATM to 10000

- Limit the amount of bills of each denomination to 50

- Allow the ATM to dispense coins as well

## Clean Implementation Requirements

1 - Use proper naming conventions.

2 - Write simple blocks and instructions.

  - Write many simple expressions

  - Avoid deeply nested parentheses and mix of operators

  - Have temporary variables for complex expressions

  - Early exit for invalid or trivial cases

  - Avoid nested control structures

  - Simple positive conditionals

  - Try to not use else statements.

  - No nested ternary operators or arrow functions

  - Keep blocks simple and small (1-4 lines)

  - keep cyclomatic complexity below 10