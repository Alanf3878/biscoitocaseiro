import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./style";
import Grid from "./grid";

const Main = () => {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        mains {
          title
          cookiemms {
            url
          }
          paragraphmms
          paragraphsprinkles
          paragraphvanilha
          price
          cookiesprinkles {
            url
          }
          cookievanilla {
            url
          }
          subtitle
        }
      }
    }
  `);

  const {
    title,
    cookiemms,
    paragraphmms,
    paragraphsprinkles,
    paragraphvanilha,
    price,
    cookiesprinkles,
    cookievanilla,
    subtitle,
  } = data.alldata.mains[0];
  return (
    <div>
      <S.Container>
        <S.Title>
          <p>{title}</p>
        </S.Title>
        <S.Flexcontainer>
          <S.Boxitem>
            <img src={cookiemms.url} alt="Cookie" />
            <p>{paragraphmms}</p>
            <button>{}</button>
          </S.Boxitem>
          <S.Boxitem>
            <img src={cookievanilla.url} alt="Cookie" />
            <p>{paragraphvanilha}</p>
            <button>{}</button>
          </S.Boxitem>

          <S.Boxitem>
            <img src={cookiesprinkles.url} alt="Cookie" />
            <p>{paragraphsprinkles}</p>
            <button>{}</button>
          </S.Boxitem>
        </S.Flexcontainer>
        <S.LineSubtitle>
          <S.Boxline>
            <S.Subtitle>
              <p>{subtitle}</p>
            </S.Subtitle>
          </S.Boxline>
        </S.LineSubtitle>
      </S.Container>
      <Grid />
    </div>
  );
};
export default Main;
