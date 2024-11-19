module.exports = (express, ctrls) => {
  const { playlistCtrl } = ctrls;
  const router = express.Router();
  router.get("/", playlistCtrl.getAll);
  return router;
};
