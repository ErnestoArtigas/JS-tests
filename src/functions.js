import fs from "fs";

export const albums = JSON.parse(fs.readFileSync("albums.json"));
export const users = JSON.parse(fs.readFileSync("users.json"));

// 1
export function retrieveUsers(userId = undefined) {
  return userId ? users.find((user) => user.id === userId) : users;
}

// 2
export function retrieveAlbums(albumId = undefined) {
  return albumId ? albums.find((album) => album.id === albumId) : albums;
}

// 3
export function retrieveAlbumsByUser(userId) {
  return albums.filter((album) => album.userId === userId);
}

// 4
export function retrieveTitlesByAlbum(albumId) {
  return albums
    .filter((album) => album.id === albumId)
    .map((album) => album.title);
}

// 5
export function retrieveUserIdsHavingAlbum() {
  return users.filter(doesUserHaveAlbum).map((user) => user.id);
}

export function doesUserHaveAlbum(user) {
  return albums.findIndex((album) => album.userId === user.id) !== -1;
}

export function alternateRetrieveUserIdsHavingAlbum() {
  return [...new Set(albums.map((album) => album.userId))];
}
