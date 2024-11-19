"use strict";
const musicFactory = require("../factories/musics");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    //get users for relation
    const users = await queryInterface.sequelize.query(`SELECT id from USERS;`);
    const usersRows = users[0];

    const data = await musicFactory(100, usersRows);
    if (data?.length) await queryInterface.bulkInsert("musics", data);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("musics", null, {});
  },
};
