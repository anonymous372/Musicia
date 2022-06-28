import * as actionTypes from "../actions";

const intialState = {
  albums: [
    { albumName: "Encore", year: 2004 },
    { albumName: "Relapse", year: 2009 },
    { albumName: "Recovery", year: 2010 },
    { albumName: "Kamikaze", year: 2018 },
    { albumName: "Viva la Vida", year: 2008 },
    { albumName: "Parachutes", year: 2000 },
    { albumName: "X&Y", year: 2005 },
    { albumName: "All In One", year: 1989 },
    { albumName: "Evolve", year: 2017 },
    { albumName: "Origins", year: 2018 },
    { albumName: "Night Visions", year: 2012 },
  ],
};

const reducer = (state = intialState, action) => {
  return state;
};

export default reducer;
