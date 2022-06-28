import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./styles.css";

function Song(props) {
  const name = props.name;
  const year = props.year;
  const [selected, setSelected] = useState(false);
  const classes = selected ? "add_" : "select_";

  const handleChange = () => {
    setSelected(true);
    props.addToList([...props.list, { songName: name, year: year }]);
  };
  return (
    <Row className="song_ d-flex py-2 px-3 justify-content-between">
      <Col xs={8} md={10} className="name_">
        {name}
      </Col>
      <Col xs={2} md={1} className="year_">
        {year}
      </Col>
      {props.add && (
        <Col xs={2} md={1}>
          <button className={classes} onClick={handleChange}>
            {selected ? "Added" : "Add "}
          </button>
        </Col>
      )}
    </Row>
  );
}

export default Song;
