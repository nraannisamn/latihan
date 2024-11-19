const { faker } = require("@faker-js/faker/locale/id_ID");

module.exports = (total = 1) => {
  const results = [];
  for (let index = 0; index < total; index++) {
    results.push(factory());
  }
  return results;
};

const factory = () => {
  return {
    name: faker.name.fullName(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};
