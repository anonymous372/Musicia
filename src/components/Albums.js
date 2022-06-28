import { connect } from "react-redux";
import { useState, useEffect } from "react";
import Album from "./Album";

import * as actionTypes from "../store/actions";

function Albums(props) {
  const [showAdd, setShowAdd] = useState(false);
  return (
    <div>
      <h3>Album</h3>
      <div>
        {props.albums.map((album, idx) => (
          <Album
            key={idx}
            name={album.albumName}
            year={album.year}
            add={showAdd}
            handleClick={props.onAddAlbum}
          />
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn_alb" onClick={() => setShowAdd(!showAdd)}>
          {showAdd ? "Save Album" : "Edit My Albums"}
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { albums: state.alb.albums, usrData: state.usr };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddAlbum: (album) =>
      dispatch({ type: actionTypes.ADD_ALBUM, album: album }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Albums);
