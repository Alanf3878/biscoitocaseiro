import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./style";

const Container = () => {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        headers {
          discount
          logowpp {
            url
          }
          paragraphwpp
          logointerrogation {
            url
          }
          paragraphinterrogation
          title
          logolupa {
            url
          }
          iconAvatar {
            url
          }
          login
          iconbag {
            url
          }
        }
      }
    }
  `);

  const {
    discount,
    logowpp,
    paragraphwpp,
    logointerrogation,
    title,
    logolupa,
    iconAvatar,
    iconbag,
    login,
    paragraphinterrogation,
  } = data.alldata.headers[0];

  return (
    <div>
      <S.Container>
        <S.DiscountContainer>
          <S.FlexContainer>
            <p>{discount}</p>
          </S.FlexContainer>
          <S.Containerbox>
            <S.Box>
              <img src={logowpp.url} alt="imgwpp" />
              <p>{paragraphwpp}</p>
            </S.Box>
            <S.Box>
              <img src={logointerrogation.url} alt="imginterrogation" />
              <p>{paragraphinterrogation}</p>
            </S.Box>
          </S.Containerbox>
        </S.DiscountContainer>
      </S.Container>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
        <S.Boxinput>
          <img src={logolupa.url} alt="imglupa" />
          <S.Input placeholder="Pesquisar" />
        </S.Boxinput>
        <S.Boxlogin>
          <S.Login>
            <img src={iconAvatar.url} alt="imgavatar" />
            <p>{login}</p>
          </S.Login>
          <img src={iconbag.url} alt="imgbag" />
        </S.Boxlogin>
      </S.TitleContainer>
    </div>
  );
};

export default Container;
