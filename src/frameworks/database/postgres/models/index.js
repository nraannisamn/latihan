const user = require("./user");
const music = require("./music");
const playlist = require("./playlist");

module.exports = (connectionDB) => ({
  user: user(connectionDB),
  music: music(connectionDB),
  playlist: playlist(connectionDB),
});
