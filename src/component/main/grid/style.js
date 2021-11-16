import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  padding-bottom: 3rem;
  justify-content: center;
  align-items: center;
  p {
    font-size: 30px;
  }
`;
export const Boximg = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const Img = styled.img`
  width: 350px;
  cursor: pointer;
  &:hover {
    transform: scale(102%);
  }
  @media (max-width: 1565px) {
  width: 300px;
}
@media (max-width: 1335px) {
  width: 250px;
}
`;
export const Subtitle = styled.div`
  width: 200px;
  height: 40px;
  padding: 10px 0 0.6em;
  border-radius: 50px;
  background-color: #fff;
  border: 3px solid #000;
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover {
    transform: scale(102%);
  }
`;
export const BoxSubtitle = styled.div`
  padding: 3rem;
`;
