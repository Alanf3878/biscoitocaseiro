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
    imgbag,
    icondelivery,
    paragraphdelivery,
    titledelivery,
    gift,
    titlegift,
    paragraphgift,
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
      <S.Containerbox>
        <S.Box style={{border: '0'}}>
          <img src={imgbag.url} />
        </S.Box>
        <S.Box>
          <img src={icondelivery.url} />
          <S.Itembox>
            <p>{titledelivery}</p>
            <b>{paragraphdelivery}</b>
          </S.Itembox>
        </S.Box>
        <S.Box>
          <img src={gift.url} />
          <S.Itembox>
            <p>{titlegift}</p>
            <b>{paragraphgift}</b>
          </S.Itembox>
        </S.Box>
      </S.Containerbox>
    </S.Home>
  );
};
export default Home;
