import styled from "styled-components";

export const Container = styled.div`
  background-color: #f2dbf0;
  width: 100%;
  height: 20vh;
  display: flex;
  align-content: center;
  justify-content: space-around;
  padding: 1rem;
  margin-top: 35px;
`;
export const Boxcontainer = styled.div`
  width: 11%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export const Boxitem = styled.div`
  display: flex;
  width: 90%;
  height: 50%;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Containerimg = styled.div`
  width: 15%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const Containerinput = styled.div`
  width: 10%;
  text-align: center;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  button {
    width: 95%;
    border: none;
    outline: none;
    background-color: #e157ce;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Soci = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Copyright = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  b {
    font-size: 10px;
  }
`;
