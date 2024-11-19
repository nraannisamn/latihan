const { DataTypes } = require("sequelize");

/**
 *
 * @param {import("sequelize").Sequelize} sequelize
 * @returns
 */
const UserModel = (sequelize) => {
  const model = sequelize.define(
    "users",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "users",
      // Other model options go here
    }
  );

  // adding this if you want custom relationships
  /**
   * this function will call after all models are loaded so you can add custom relationships freely from this file
   * @param {ReturnType<import("./index")>} models
   */
  model.initRelation = (models) => {
    model.hasMany(models.music, { foreignKey: "authorId" });
    model.hasMany(models.playlist, { foreignKey: "authorId" });
  };
  return model;
};

module.exports = UserModel;
