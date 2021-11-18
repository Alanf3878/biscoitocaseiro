import styled from "styled-components";

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