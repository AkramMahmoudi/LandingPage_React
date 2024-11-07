import React from "react";
import { Dropdown } from "react-bootstrap";

function DropdownMenu(props) {
  const [show, setShow] = React.useState(false);

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  return (
    <Dropdown
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      show={show}
    >
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        style={{
          backgroundColor: "black",
          borderColor: "black",
          
        }}
      >
        {props.nameBtn}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">{props.nestedPages[0]}</Dropdown.Item>
        <Dropdown.Item href="#/action-2">{props.nestedPages[1]}</Dropdown.Item>
        <Dropdown.Item href="#/action-3">{props.nestedPages[2]}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;
