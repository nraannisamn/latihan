const { DataTypes } = require("sequelize");

/**
 *
 * @param {import("sequelize").Sequelize} sequelize
 * @returns
 */
const MusicModel = (sequelize) => {
  const model = sequelize.define(
    "musics",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: { type: DataTypes.STRING },
      relaseDate: { type: DataTypes.DATE },
      album: { type: DataTypes.BOOLEAN },
      artistId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: { model: "users", key: "id" },
      },
      createdAt: { allowNull: false, type: DataTypes.DATE },
      updatedAt: { allowNull: false, type: DataTypes.DATE },
    },
    {
      tableName: "musics",
      // Other model options go here
    }
  );

  // adding this if you want custom relationships
  /**
   * this function will call after all models are loaded so you can add custom relationships freely from this file
   * @param {ReturnType<import("./index")>} models
   */
  model.initRelation = (models) => {
    model.belongsTo(models.user, { foreignKey: "artistId" });
    // model.belongsToMany(models.playlist, {
    //   foreignKey: "musicId",
    //   // as: "musics",
    //   through: "playlist_has_musics",
    //   timestamps: false,
    // });
  };

  return model;
};

module.exports = MusicModel;
