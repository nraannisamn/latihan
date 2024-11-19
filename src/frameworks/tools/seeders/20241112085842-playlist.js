"use strict";
const playlistFactory = require("../factories/playlist");

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
    // get musics for relation
    const users = await queryInterface.sequelize.query(`select id from USERS;`);
    const usersRows = users[0];

    const data = await playlistFactory(10, usersRows);
    if (data?.length) await queryInterface.bulkInsert("playlists", data);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("playlists", null, {});
  },
};
