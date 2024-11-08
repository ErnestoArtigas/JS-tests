import fs from "fs";

const albums = JSON.parse(fs.readFileSync("albums.json"));
const users = JSON.parse(fs.readFileSync("users.json"));

// 1
function retrieveUsers(userId = undefined) {
  return userId ? users.find((user) => user.id === userId) : users;
}

// 2
function retrieveAlbums(albumId = undefined) {
  return albumId ? albums.find((album) => album.id === albumId) : albums;
}

// 3
function retrieveAlbumsByUser(userId) {
  return albums.filter((album) => album.userId === userId);
}

// 4
// function retrieveAlbumsByUser(userId) {
//   return albums.filter((album) => album.userId === userId);
// }

// 5
function retrieveUserIdsPosessingAlbum() {
  return users.filter(hasUserAnAlbum).map((user) => user.id);
}

function hasUserAnAlbum(user) {
  const index = albums.findIndex((album) => album.userId === user.id);
  console.log("index", index);
  return index !== -1;
}

// console.log("Users", retrieveUsers());
// console.log("User ID", retrieveUsers(10));

// console.log("Albums", retrieveAlbums());
// console.log("Album ID", retrieveAlbums(10));

// console.log("Albums by User", retrieveAlbumsByUser(10));

console.log("UserId that have one album", retrieveUserIdsPosessingAlbum());
