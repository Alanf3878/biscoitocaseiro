import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./style";

const Bestsellers = () => {

  const data = useStaticQuery(graphql`
    query {
      alldata {
        headers {
          paragraphbackg
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
    
    imgbag,
    icondelivery,
    paragraphdelivery,
    titledelivery,
    gift,
    titlegift,
    paragraphgift
    
  } = data.alldata.headers[0];

  return (
    <div>
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
    </div>
  );
};
export default Bestsellers;
