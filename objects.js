var playlist = {
  bob: 'music',
  greg: 'song'
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}
