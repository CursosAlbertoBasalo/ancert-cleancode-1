# Sluggish Kata

## Specifications

You need to implement a function that returns a string identifier for a given object and use it as a file name to save the object in a json file. 

By default, the function must use the object's `name` property to generate the identifier. The caller can choose to use another property. If the object does not have the chosen property, the function must return an error.

The identifier must be usable as a URL slug. Substituting spaces and special characters with dashes or underscores.

By default, the function must return in lowercase. The caller can choose to return it in the original case.

Also the caller can choose to add a timestamp or a random short hash at the end to avoid collisions.

### Acceptance Criteria:

```gherkin
Given an object like { name: "John Doe" }
When the object is passed to the function
Then the function returns "john-doe"
```


```gherkin
Given an object like { name: "John Doe" }
When the object is passed to the function with the option to add a timestamp
Then the function returns "john-doe-2025-01-01"
```

```gherkin
Given an object like { name: "John Doe" }
When the object is passed to the function with the option to add a random hash
Then the function returns "john-doe-5f4a"
```

```gherkin
Given an object like { notName: "John Doe" }
When the object is passed to the function
Then the function returns an error
```

```gherkin
When the object like {title: "My article"} is passed to the function with the option to use the title property
Then the function returns "my-article"
```

### Improvements:

- Add the option to use a combination of properties to generate the identifier.

- Add the option to use a custom function to generate the identifier.


## Clean Implementation Requirements

1 - Use proper naming conventions.

2 - Write simple blocks and instructions.

3 - Write simple functions.

  - Do one thing

  - Keep them small (9-15 lines)

  - Use only one level of abstraction

  - Use descriptive verbs and names

  - Reduce arguments (1-2)

  - Ask or tell, don't mix

  - Avoid using null by using guard clauses or default values

  - Encapsulate side effects