import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./style";

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        headers {
          home
          store
          about
          contact
          iconsoci {
            url
          }
        }
      }
    }
  `);

  const { 
    home,
    store,
    about,
    contact,
    iconsoci } = data.alldata.headers[0];

  return (
    <div>
      <S.Container>
        <S.Boxcontainer>
          <S.Nav>
            <S.ItemNav>{home}</S.ItemNav>
            <S.ItemNav>{store}</S.ItemNav>
            <S.ItemNav>{about}</S.ItemNav>
            <S.ItemNav>{contact}</S.ItemNav>
          </S.Nav>
          <img src={iconsoci.url} />
        </S.Boxcontainer>
      </S.Container>
    </div>
  );
};

export default Nav;
