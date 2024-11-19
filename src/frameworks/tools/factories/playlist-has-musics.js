module.exports = (playlists, musics, total = musics?.length ?? 0) => {
  const results = [];
  for (let index = 0; index < total; index++) {
    const music = musics[index];
    results.push(factory(arrRandom(playlists), music));
  }
  return results;
};

const factory = (playlist, music) => ({
  playlistId: playlist.id,
  musicId: music.id,
});

const arrRandom = (items) => items[Math.floor(Math.random() * items.length)];
