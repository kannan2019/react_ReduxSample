import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "Enna Vilai Azhage", duration: "6.57" },
    { title: "Mun Paniya", duration: "5.36" },
    { title: "Ninaichapadi ", duration: "7.41" },
    { title: "Ithu thana", duration: "4.59" },
    { title: "Kaatre En Vasal", duration: "4.58" }
  ];
};
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
