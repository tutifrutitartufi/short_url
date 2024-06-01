import React, { Component } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Links from "./Links";

const Context = styled.div.attrs({
  className: "context",
})`
  padding: 0;
  margin: 0;
`;

const Nav = styled.nav.attrs({
  className: "navbar navbar-expand-lg navbar-dark bg-dark",
})`
  margin-bottom: 20 px;
`;

class NavBar extends Component {
  render() {
    return (
      <Context>
        <Nav>
          <Logo />
          <Links />
        </Nav>
      </Context>
    );
  }
}

export default NavBar;
