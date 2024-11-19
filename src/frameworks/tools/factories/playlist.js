const { faker } = require("@faker-js/faker/locale/id_ID");

module.exports = (total = 1, users, playlists = []) => {
  const results = [];
  for (let index = 0; index < total; index++) {
    results.push(factory(arrRandom(users), arrRandom(playlists)));
  }
  return results;
};

const factory = (user, playlist) => {
  return {
    name: faker.word.conjunction(),
    authorId: user?.id ?? null,
    playlistId: playlist?.id ?? null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

const arrRandom = (items) => items[Math.floor(Math.random() * items.length)];
