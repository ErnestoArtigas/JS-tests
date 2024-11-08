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

The functions filter, find, findIndex, map, ternary ifs and default function parameters are used for clean and efficient code.

The `npm run test` uses experimental node to get ECMAScript modules support, as stated on the official [documentation of jest](https://jestjs.io/docs/ecmascript-modules).

The fifth function that lists the User ids having at least one album iterates on the users file and search if each user has an album. If a user doesn't have an album, it won't be displayed.
The function isn't the fastest because it iterates on both the users and album files, but seemed to me the most logical in a object oriented programming, as part of a possible userService.
However I developed an alternate function iterating on the album files and creating a set from the filtered user ids to get a non duplicates list in one go, being much faster in complexity.
Both are available, tested and used in the program.
