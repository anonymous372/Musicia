import { connect } from "react-redux";
import { useState, useEffect } from "react";
import * as actionTypes from "../store/actions";

import Song from "./Song";
import "./styles.css";
function Songs(props) {
  const songs = props.songs;
  const [showAdd, setShowAdd] = useState(false);
  const [newList, setNewList] = useState([]);
  const handleAddPlayList = () => {
    if (showAdd) {
      console.log(newList);
      props.onAddPlayList(newList);
    }
    setShowAdd(!showAdd);
  };
  return (
    <div>
      <h4> All Songs </h4>
      <div>
        {songs.map((song, idx) => (
          <Song
            key={idx}
            name={song.songName}
            year={song.year}
            add={showAdd}
            list={newList}
            addToList={setNewList}
          />
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn_alb" onClick={() => handleAddPlayList()}>
          {showAdd ? "Add Playlist" : "New Playlist"}
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { songs: state.sng.songs };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlayList: (playlist) =>
      dispatch({ type: actionTypes.ADD_PLAYLIST, playlist: playlist }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Songs);
