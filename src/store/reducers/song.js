import * as actionTypes from "../actions";

const intialState = {
  songs: [
    { songName: "Godzilla", year: 2020 },
    { songName: "Beautiful", year: 2009 },
    { songName: "Mockingbird", year: 2005 },
    { songName: "Without Me", year: 2002 },
    { songName: "Rap God", year: 2013 },
    { songName: "White America", year: 2002 },
    { songName: "Till I Collapse", year: 2002 },
    { songName: "Way I Am", year: 2000 },
  ],
};

const reducer = (state = intialState, action) => {
  return state;
};

export default reducer;
