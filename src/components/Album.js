import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./styles.css";

function Album(props) {
  const [selected, setSelected] = useState(false);
  const classes = selected ? "add_" : "select_";

  const handleAdd = () => {
    if (!selected) {
      props.handleClick({ albumName: props.name, year: props.year });
    }
    setSelected(true);
  };

  return (
    <Row className="song_ d-flex py-2 px-3 justify-content-between">
      <Col xs={8} md={10} className="name_">
        {props.name}
      </Col>
      <Col xs={2} md={1} className="year_">
        {props.year}
      </Col>
      {props.add && (
        <Col xs={2} md={1}>
          <button className={classes} onClick={handleAdd}>
            {selected ? "Added" : "Add"}
          </button>
        </Col>
      )}
    </Row>
  );
}

export default Album;
