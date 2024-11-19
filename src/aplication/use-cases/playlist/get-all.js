const useCase = async (repositories, queries) => {
  try {
    const { playlistRepo } = repositories;
    const res = await playlistRepo.findAndCountAll(queries);
    return res;
  } catch (error) {
    console.log("errdxxxx", error);
  }
};
module.exports = useCase;
