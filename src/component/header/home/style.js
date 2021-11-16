import styled from "styled-components";

export const Container = styled.div`
  background-image: url(${(props) => props.back});
  background-size: 100%;
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
  align-items: flex-end;
  justify-content: space-evenly;
  width: 95%;
  height: 20%;
  cursor: pointer;
`;
export const Box = styled.div`
  align-items: flex-end;
  width: 400px;
  display: flex;
  justify-content: flex-end;
  border-left: solid 2px black;
  &:hover {
    transform: scale(102%);
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
