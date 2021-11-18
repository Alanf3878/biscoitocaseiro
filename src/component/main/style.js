import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 50vh;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

export const Flexcontainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  p {
    font-size: 30px;
  }
`;

export const Boxitem = styled.div`
  width: 20vw;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  img {
    width: 320px;
    @media (max-width: 1335px) {
  width: 250px;
}
  }
`;

export const Subtitle = styled.div`
  width: 100px;
  height: 30px;
  padding: 10px 0 0.6em;
  border-radius: 50px;
  background-color: #fff;
  border: 3px solid #000;
  position: relative;
  bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    transform: scale(102%);
  }
`;

export const LineSubtitle = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Boxline = styled.div`
  width: 90vw;
  height: 3px;
  display: flex;
  justify-content: center;
  background-color: black;
`;

export const Main = styled.div`
width: 100%;
height: auto;
`