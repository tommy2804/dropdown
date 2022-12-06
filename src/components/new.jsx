import React from 'react';
import drop from './data';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { DropdownSubmenu, NavDropdownMenu } from 'react-bootstrap-submenu';

let data = drop;

data = data.map((val) => {
  if (val.submenu) {
    return (
      <DropdownSubmenu href="#action/3.7" title={val.label}>
        <Dropdown.Item eventKey="1">{val.submenu[0].label}</Dropdown.Item>
        <Dropdown.Item eventKey="1">{val.submenu[1].label}</Dropdown.Item>
        {val.submenu[2] ? (
          <Dropdown.Item eventKey="1">{val.submenu[2].label}</Dropdown.Item>
        ) : (
          <></>
        )}
        {val.submenu[3] ? (
          <Dropdown.Item eventKey="1">{val.submenu[3].label}</Dropdown.Item>
        ) : (
          <></>
        )}
      </DropdownSubmenu>
    );
  } else return <Dropdown.Item eventKey="0">{val.label}</Dropdown.Item>;
});

function Drop() {
  return <React.Fragment>{data}</React.Fragment>;
}

export default Drop;
