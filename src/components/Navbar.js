// import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
function Navbar() {
  return (
    <div id="nav" className="d-flex mt-2">
      <div>
        <Link to="/">Songs</Link>
      </div>
      <div>
        <Link to="/album">Albums</Link>
      </div>
      <div>
        <Link to="/user">User</Link>
      </div>
    </div>
  );
}

export default Navbar;
