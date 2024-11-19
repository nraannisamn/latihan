(async () => {
  require("dotenv").config();
  const config = require("./config/config");
  const express = require("express");
  const server = require("./frameworks/webserver/server");
  const routes = require("./frameworks/webserver/routes/routes");
  const app = express();
  server(app);

  const {
    sequilizeRelationInit,
  } = require("./frameworks/database/postgres/models/relation-init");
  const models = require("./frameworks/database/postgres/models/index");
  const connection = require("./frameworks/database/" +
    process.env.DB_DIALECT +
    "/connection");
  const connectionDb = connection(config);
  const model = sequilizeRelationInit(models(connectionDb));

  const playlistRepo = require("./frameworks/database/postgres/repositories/playlist-repository");
  const repositories = { playlistRepo: await playlistRepo(model) };

  const playlistUsecases = require("./aplication/use-cases/playlist/index");
  const usecases = {
    playlistUsecases: await playlistUsecases(repositories),
  };

  const playlistController = require("./adpter/controllers/playlist-controller");
  const controllers = {
    playlistCtrl: await playlistController(usecases),
  };

  routes(express, app, controllers);
})();
