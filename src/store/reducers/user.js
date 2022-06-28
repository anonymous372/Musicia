import * as actionTypes from "../actions";

const intialState = {
  albums: [],
  playlists: [],
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ALBUM:
      return { ...state, albums: [...state.albums, action.album] };
    case actionTypes.ADD_PLAYLIST:
      console.log(action.playlist);
      return {
        ...state,
        playlists: [...state.playlists, [...action.playlist]],
      };
  }
  return state;
};

export default reducer;
