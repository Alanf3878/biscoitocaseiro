import styled from "styled-components";

export const Container = styled.div`
  background-image: url(${(props) => props.back});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 90%;
  height: 50vh;
  display: flex;
  align-items: center;
  padding-left: 5rem;
  padding-top: 2rem;
`;
export const Home = styled.div`
  display: flex;
  width: 100%;
  height: 75vh;
  justify-content: center;
  flex-wrap: wrap;
`;
export const Boxcontainer = styled.div``;
export const Title = styled.h1`
  font-family: "Fredoka One", cursive;
  font-size: 50px;
`;
export const Paragraph = styled.p`
  font-size: 38px;
`;

export const Containerbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: auto;
  cursor: pointer;
  margin: 3rem 0;

  @media (max-width: 800px) {
    flex-direction: column;
    
  }
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33%;
  height: 15vh;
  border-left: solid 2px black;
  &:hover {
    transform: scale(102%);
  }

  @media (max-width: 1440px) {
    border: 0;
    margin: 2rem 0;
  }
`;
export const Itembox = styled.div`
  width: 180px;
  padding-left: 1rem;
`;
export const Boxbtn = styled.div`
 width: 120px;
  height: 35px;
  padding: 10px 0 0.6em;
  border-radius: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    transform: scale(102%);
  }
  `;

export const Boxtitle = styled.div`
width: 100%;
`