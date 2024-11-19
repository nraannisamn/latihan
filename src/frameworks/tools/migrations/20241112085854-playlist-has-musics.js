"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("playlist_has_musics", {
      playlistId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: { model: "playlists", key: "id" },
      },
      musicId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: { model: "musics", key: "id" },
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("playlist_has_musics");
  },
};
