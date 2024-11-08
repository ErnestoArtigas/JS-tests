# JS test

Data manipulation (json) in javascript

# Functions to write

1. Implement function to get ALL users, or ONE user associated with the given id

2. Implement function to get ALL albums, or ONE album associated with the given id

3. Implement function to get ALL albums of one user

4. Implement function to get ALL titles of the one album

5. Implement function to get unique ids of users having at least one album

# Expectations

- The code must be clean, indented and understandable by a novice.
- Tests are welcome.
- Each function should be easily to test.

# Overview of the solution

The project comes in a node project, working with ESM and native javascript. There are two commands :

```sh
// Simple script that console.log the multiple functions and their usages
npm run start

// Unit testing script that tests the multiple functions with different parameters and cases
npm run test
```

The project was divided in four files for better readibility.

`main.js` -> The main script.

`test.js` -> The unit testing script.

`functions.js` -> The data manipulation functions ECMAScript module.

`constants.js` -> The constants used in main.js and test.js.

The functions filter, find, findIndex, map and ternary ifs are used for clean and efficient code.

The `npm run test` uses experimental node to get ECMAScript modules support, as stated on the official [documentation of jest](https://jestjs.io/docs/ecmascript-modules).
