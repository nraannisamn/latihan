const { faker } = require("@faker-js/faker/locale/id_ID");

module.exports = (total = 1, users) => {
  const results = [];
  for (let index = 0; index < total; index++) {
    results.push(factory(arrRandom(users)));
  }
  return results;
};

const factory = (user) => {
  return {
    title: faker.music.songName(),
    relaseDate: faker.date.between({ from: "2000-01-01", to: Date.now() }),
    album: faker.music.album(),
    artistId: user?.id ?? null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

const arrRandom = (items) => items[Math.floor(Math.random() * items.length)];
