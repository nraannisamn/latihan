const getAll = require("./get-all");
module.exports = (repositories) => {
  return {
    getAllUsecase: getAll.bind(null, repositories),
  };
};
