const config = require("../../config/config");
const bodyParser = require("body-parser");

module.exports = (app) => {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  app.listen(config.app.port, () => {
    console.log(`Example app listening on port ${config.app.port}`);
  });
};
