module.exports = (usecases) => {
  const { playlistUsecases } = usecases;
  const getAll = async (req, res, next) => {
    const result = await playlistUsecases.getAllUsecase();
    return res.status(200).json(result);
  };
  return { getAll };
};
