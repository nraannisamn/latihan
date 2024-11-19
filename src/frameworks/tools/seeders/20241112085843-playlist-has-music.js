"use strict";
const playlistHasMusicsFactory = require("../factories/playlist-has-musics");

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
    const musics = await queryInterface.sequelize.query(
      `select id from MUSICS;`
    );
    const musicRows = musics[0];

    const playlists = await queryInterface.sequelize.query(
      `select id from PLAYLISTS;`
    );
    const playlistRows = playlists[0];

    const data = await playlistHasMusicsFactory(playlistRows, musicRows);
    if (data?.length)
      await queryInterface.bulkInsert("playlist_has_musics", data);
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
