const { DataTypes } = require("sequelize");

/**
 *
 * @param {import("sequelize").Sequelize} sequelize
 * @returns
 */
const PlaylistModel = (sequelize) => {
  const model = sequelize.define(
    "playlists",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: { type: DataTypes.STRING },
      authorId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: { model: "users", key: "id" },
      },
      playlistId: { type: DataTypes.INTEGER },
      createdAt: { allowNull: false, type: DataTypes.DATE },
      updatedAt: { allowNull: false, type: DataTypes.DATE },
    },
    {
      tableName: "playlists",
      // Other model options go here
    }
  );

  // adding this if you want custom relationships
  /**
   * this function will call after all models are loaded so you can add custom relationships freely from this file
   * @param {ReturnType<import("./index")>} models
   */

  model.initRelation = (models) => {
    // model.belongsToMany(models.music, {
    //   foreignKey: "playlistId",
    //   // as: "playlists",
    //   through: "playlist_has_musics",
    //   timestamps: false,
    // });
    model.belongsTo(models.user, { foreignKey: "authorId" });
  };

  return model;
};

module.exports = PlaylistModel;
