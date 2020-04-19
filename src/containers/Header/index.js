import React from "react";
import logo from "./../../logo.svg";
import { Container } from "./styles";

const Header = () => (
  <Container>
    <img src={logo} alt="logo" />
  </Container>
);

export default Header;
