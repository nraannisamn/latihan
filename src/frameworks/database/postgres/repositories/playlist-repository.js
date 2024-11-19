module.exports = (models) => {
  const { playlist, user } = models;

  const findAndCountAll = async (queries) => {
    const result = await playlist.findAll({
      include: { model: user },
    });
    return result;
  };

  return { findAndCountAll };
};
