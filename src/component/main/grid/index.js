import React, { useState } from 'react';
import  { graphql, useStaticQuery } from 'gatsby';
import * as S from "./style";

const Grid = () => {
    const data = useStaticQuery(graphql`
    query {
        alldata {
            grids{
                title
                subtitle
                imggrids{
                  img{
                    url
                  }
                }
              }
        }
    }`)
    const { 
      title,
      imggrids,
      subtitle
    } = data.alldata.grids[0]

    return (
        <S.Container>
            <S.Title>
                <p>{title}</p>
            </S.Title>
            <S.Boximg>
                {imggrids.map((item) => (
                    <div>
                        <S.Img src ={item.img.url} alt ="cookie"/>
                    </div>
                ))}
            </S.Boximg>
            <S.BoxSubtitle>
                <S.Subtitle>
                    <p>{subtitle}</p>
                </S.Subtitle>
            </S.BoxSubtitle>
        </S.Container>
    )
}

export default Grid;