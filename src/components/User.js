import { connect } from "react-redux";
import Album from "./Album";
import Song from "./Song";

function User(props) {
  console.log("Playlists", props.playlists);
  return (
    <div>
      {props.albums.length === 0 && props.playlists.length === 0 && (
        <h3 className="mt-5 text-center text-secondary">
          You haven't added anyhting yet...
        </h3>
      )}
      {props.albums.length > 0 && <h3 className="text-center">My Albums</h3>}
      {props.albums.map((album, idx) => (
        <Album key={idx} name={album.albumName} year={album.year} add={false} />
      ))}
      {props.playlists.length > 0 && (
        <h3 className="mt-5 text-center mb-3">My Playlist</h3>
      )}
      {props.playlists.map((playlist, idx) => (
        <div className="mb-4">
          <h4 className="my-0" style={{ color: "#B25068" }}>
            Playlist {idx + 1}
          </h4>
          {props.playlists[idx].map((song, indx) => (
            <Song
              key={1000 + indx}
              name={song.songName}
              year={song.year}
              add={false}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return { albums: state.usr.albums, playlists: state.usr.playlists };
};

export default connect(mapStateToProps)(User);
