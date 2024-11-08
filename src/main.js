import {
  albums,
  users,
  retrieveAlbums,
  retrieveUsers,
  retrieveAlbumsByUser,
  retrieveTitlesByAlbum,
  retrieveUserIdsHavingAlbum,
  alternateRetrieveUserIdsHavingAlbum,
} from "./functions.js";

import { mockedUserId, mockedAlbumId, mockedAlbum } from "./constants.js";

// JS Test - 1

console.log(
  "Should return all users if no parameters provided",
  retrieveUsers()
);

console.log(
  "Should return a specific user if parameter provided",
  retrieveUsers(mockedUserId)
);

console.log(
  "Should return an undefined if the parameter provided is incorrect",
  retrieveUsers(-1)
);

// JS Test - 2

console.log(
  "Should return all albums if no parameters provided",
  retrieveAlbums()
);

console.log(
  "Should return a specific album if parameter provided",
  retrieveAlbums(mockedAlbumId)
);

console.log(
  "Should return an undefined if the parameter provided is incorrect",
  retrieveAlbums(-1)
);

// JS Test - 3

console.log(
  "Should return all album a user has",
  retrieveAlbumsByUser(mockedUserId)
);

console.log(
  "Should return an empty array if the user doesn't have albums",
  retrieveAlbumsByUser(12345)
);

// "JS Test - 4"

console.log(
  "Should return all titles from an album",
  retrieveTitlesByAlbum(mockedAlbumId)
);

albums.push(mockedAlbum);

console.log(
  "Should return all titles from an album with a modified list",
  retrieveTitlesByAlbum(mockedAlbumId)
);

albums.pop();

console.log(
  "Should return an empty array if the parameter provided is incorrect",
  retrieveTitlesByAlbum(12345)
);

// JS Test - 5

console.log(
  "Should return all the users id if they have at least one album",
  retrieveUserIdsHavingAlbum()
);

const deletedUser = users.pop();

console.log(
  "Should return all the users id if they have at least one album with a modified list",
  retrieveUserIdsHavingAlbum()
);

users.push(deletedUser);

console.log(
  "Alternate function should return all the users id if they have at least one album",
  alternateRetrieveUserIdsHavingAlbum()
);

// In the provided JSON file, every user has 10 albums, therefore we remove ten elements of the album array.
const deletedAlbums = [];
for (let i = 0; i < 10; i++) deletedAlbums.push(albums.pop());

console.log(
  "Alternate function should return all the users id if they have at least one album with a modified list",
  alternateRetrieveUserIdsHavingAlbum()
);

for (let i = 0; i < 10; i++) albums.push(deletedAlbums.pop());
