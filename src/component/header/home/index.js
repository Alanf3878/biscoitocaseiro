import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./style";

const Home = () => {

  const data = useStaticQuery(graphql`
    query {
      alldata {
        headers {
          backgroundimg {
            url
          }
          titlebackground
          paragraphbackg
          iconcart {
            url
          }
          btncart
          imgbag {
            url
          }
          icondelivery {
            url
          }
          titledelivery
          paragraphdelivery
          gift {
            url
          }
          titlegift
          paragraphgift
        }
      }
    }
  `);

  const {
    backgroundimg,
    titlebackground,
    paragraphbackg,
    iconcart,
    btncart
  } = data.alldata.headers[0];

  return (
    <S.Home>
      <S.Container back={backgroundimg.url}>
        <div>
          <S.Title>{titlebackground}</S.Title>
          <S.Paragraph>{paragraphbackg}</S.Paragraph>
          <S.Boxbtn>
           <img src = {iconcart.url}/>
           <p>{btncart}</p>
            </S.Boxbtn>
        </div>
      </S.Container>
   
    </S.Home>
  );
};
export default Home;
