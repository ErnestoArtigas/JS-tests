import {
  albums,
  users,
  retrieveAlbums,
  retrieveUsers,
  retrieveAlbumsByUser,
  retrieveTitlesByAlbum,
  retrieveUserIdsHavingAlbum,
  doesUserHaveAlbum,
  alternateRetrieveUserIdsHavingAlbum,
} from "./functions.js";

import { mockedUserId, mockedAlbumId, mockedAlbum } from "./constants.js";

describe("JS Test - 1", () => {
  test("Should return all users if no parameters provided", () => {
    expect(retrieveUsers()).toEqual(users);
  });

  test("Should return a specific user if parameter provided", () => {
    expect(retrieveUsers(mockedUserId)).toEqual(
      users.find((user) => user.id === mockedUserId)
    );
  });

  test("Should return an undefined if the parameter provided is incorrect", () => {
    expect(retrieveUsers(-1)).toBeUndefined();
  });
});

describe("JS Test - 2", () => {
  test("Should return all users if no parameters provided", () => {
    expect(retrieveAlbums()).toEqual(albums);
  });

  test("Should return a specific user if parameter provided", () => {
    expect(retrieveAlbums(mockedAlbumId)).toEqual(
      albums.find((album) => album.id === mockedAlbumId)
    );
  });

  test("Should return an undefined if the parameter provided is incorrect", () => {
    expect(retrieveAlbums(-1)).toBeUndefined();
  });
});

describe("JS Test - 3", () => {
  test("Should return all album a user has", () => {
    expect(retrieveAlbumsByUser(mockedUserId)).toEqual(
      albums.filter((album) => album.userId === mockedUserId)
    );
  });

  test("Should return an empty array if the user doesn't have albums", () => {
    expect(retrieveAlbumsByUser(12345)).toEqual([]);
  });
});

describe("JS Test - 4", () => {
  test("Should return all titles from an album", () => {
    expect(retrieveTitlesByAlbum(mockedAlbumId)).toEqual(
      albums
        .filter((album) => album.id === mockedAlbumId)
        .map((album) => album.title)
    );
  });

  test("Should return all titles from an album with a modified list", () => {
    albums.push(mockedAlbum);

    expect(retrieveTitlesByAlbum(mockedAlbumId)).toEqual(
      albums
        .filter((album) => album.id === mockedAlbumId)
        .map((album) => album.title)
    );

    albums.pop();
  });

  test("Should return an empty array if the parameter provided is incorrect", () => {
    expect(retrieveTitlesByAlbum(12345)).toEqual([]);
  });
});

describe("JS Test - 5", () => {
  test("Should return all the users id if they have at least one album", () => {
    expect(retrieveUserIdsHavingAlbum()).toEqual(
      users.filter(doesUserHaveAlbum).map((user) => user.id)
    );
  });

  test("Should return all the users id if they have at least one album with a modified list", () => {
    const deletedUser = users.pop();

    expect(retrieveUserIdsHavingAlbum()).toEqual(
      users.filter(doesUserHaveAlbum).map((user) => user.id)
    );

    users.push(deletedUser);
  });

  test("Alternate function should return all the users id if they have at least one album", () => {
    expect(alternateRetrieveUserIdsHavingAlbum()).toEqual(
      users.filter(doesUserHaveAlbum).map((user) => user.id)
    );
  });

  test("Alternate function should return all the users id if they have at least one album with a modified list", () => {
    // In the provided JSON file, every user has 10 albums, therefore we remove ten elements of the album array.
    const deletedAlbums = [];
    for (let i = 0; i < 10; i++) deletedAlbums.push(albums.pop());

    expect(alternateRetrieveUserIdsHavingAlbum()).toEqual(
      users.filter(doesUserHaveAlbum).map((user) => user.id)
    );

    for (let i = 0; i < 10; i++) albums.push(deletedAlbums.pop());
  });
});
