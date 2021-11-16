import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./style";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        footers {
          store
          schedule
          address
          payments
          paragraph
          social
          copyright
          about
          faq
          week
          addrestext
          ticket {
            url
          }
          visa {
            url
          }
          mastercard {
            url
          }
          mercadopago {
            url
          }
          pix {
            url
          }
          email
          icontelegram {
            url
          }
          iconface {
            url
          }
          iconinsta {
            url
          }
          icontub {
            url
          }
          icontwitter {
            url
          }
          textfooter
        }
      }
    }
  `);

  const {
    store,
    about,
    week,
    schedule,
    address,
    addrestext,
    faq,
    payments,
    ticket,
    visa,
    mastercard,
    mercadopago,
    pix,
    paragraph,
    email,
    icontelegram,
    iconface,
    iconinsta,
    icontub,
    icontwitter,
    social,
    copyright,
    textfooter,
  } = data.alldata.footers[0];
  return (
    <div>
      <S.Container>
        <S.Boxcontainer>
          <p>{store}</p>
          <p>{faq}</p>
          <p>{about}</p>
        </S.Boxcontainer>
        <S.Boxcontainer>
          <p>{schedule}</p>
          <p>{week}</p>
        </S.Boxcontainer>
        <S.Boxcontainer>
          <p>{address}</p>
          <p>{addrestext}</p>
        </S.Boxcontainer>
        <S.Containerimg>
          <p>{payments}</p>
          <S.Boxitem>
            <img src={ticket.url} />
            <img src={visa.url} />
            <img src={mastercard.url} />
            <img src={mercadopago.url} />
            <img src={pix.url} />
          </S.Boxitem>
        </S.Containerimg>
        <S.Containerinput>
          <p>{paragraph}</p>
          <div>
            <b>{email}</b>
            <input placeholder="email@mail.com.br" />
            <button>PARTICIPAR</button>
          </div>
        </S.Containerinput>
        <S.Boxcontainer>
          <p>{social}</p>
          <S.Soci>
            <img src={icontelegram.url} />
            <img src={iconface.url} />
            <img src={iconinsta.url} />
            <img src={icontub.url} />
            <img src={icontwitter.url} />
          </S.Soci>
        </S.Boxcontainer>
        <S.Copyright>
          <p>{copyright}</p>
          <b>{textfooter}</b>
        </S.Copyright>
      </S.Container>
    </div>
  );
};

export default Footer;
