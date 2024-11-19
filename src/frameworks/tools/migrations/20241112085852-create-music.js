"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("musics", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      artistId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: { model: "users", key: "id" },
      },
      title: { type: DataTypes.STRING },
      relaseDate: { type: DataTypes.DATE },
      album: { type: DataTypes.STRING },
      createdAt: { allowNull: false, type: DataTypes.DATE },
      updatedAt: { allowNull: false, type: DataTypes.DATE },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("playlist_has_musics");
    await queryInterface.dropTable("musics");
  },
};
