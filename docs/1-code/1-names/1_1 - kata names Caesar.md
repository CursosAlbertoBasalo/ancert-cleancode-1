# Caesar Cipher Kata

## Specifications

This is a type of substitution cipher in which each letter in the plaintext is shifted a certain number of places down the alphabet.

When reaching the end of the alphabet, the cipher restarts at the beginning (wraps around) of the same case.

### Acceptance Criteria:

```gherkin
Given a the string "hal"
When the Caesar cipher is applied with a shift of 1
Then the output is "ibm"
```

```gherkin
Given a the string "xyz"
When the Caesar cipher is applied with a shift of 1
Then the output is "yza"
```

```gherkin
Given a the string "abc"
When the Caesar cipher is applied with a shift of 2
Then the output is "cde"
```

```gherkin
Given a the string "abc"
When the Caesar cipher is applied with a shift of 26
Then the output is "abc"
```


### Improvements:
- Treat uppercase and lowercase letters as distinct characters (i.e. A and a are different)
- Allow the shift to be a sequence of numbers, so that each letter can be shifted by a different amount.
- Extract the shift number sequence form a password string char codes.

## Clean Implementation Requirements

1 - Use proper naming conventions.

  - Use tools to enforce naming conventions and style.

  - Use spaces to clarify expressions.

  - Use only one empty line as a separator between blocks of code.

  - Limit the length of lines to 80-120 characters.

  - Use descriptive names for variables, functions, and classes.

  - Allow well-known abbreviations like i for index or id for identifier.

  - Use the same naming conventions for all elements.

  - No magic numbers or strings.

  - No technical jargon.

  - Any function or method should start with a verb and be named after what it does.

  - Use simply short verbs for conditional flags and booleans.

  - Have a vocabulary for the project.

  - Don`t write comments that explain what could be done with a better name.
