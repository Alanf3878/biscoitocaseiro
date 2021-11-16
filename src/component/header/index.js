import React from "react";
import Container from "./container";
import Home from "./home";
import Nav from "./nav";
import * as S from "./style";

const Header = () => {
  return (
    <S.Header>
      <Container />
      <Nav />
      <Home />
    </S.Header>
  );
};

export default Header;
