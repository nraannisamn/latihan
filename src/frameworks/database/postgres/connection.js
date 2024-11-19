const { Sequelize } = require("sequelize");

module.exports = (config) => {
  var log = {};
  if (config.nodeEnv == "production") {
    log = { logging: false };
  }
  const sequelize = new Sequelize({
    // query: { raw: true, nest: true },
    host: config.db.host,
    port: config.db.port,
    username: config.db.username,
    password: config.db.password,
    database: config.db.name,
    dialect: config.db.dialect,
    ...log,
  });

  sequelize
    .authenticate()
    .then(() => {})
    .catch((err) => console.log(err));

  return sequelize;
};
