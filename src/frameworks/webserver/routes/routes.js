const playlistRoute = require("./playlist-route");

module.exports = (express, app, ctrls) => {
  app.use("/api/v1/playlists", playlistRoute(express, ctrls));
};
