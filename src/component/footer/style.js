import styled from "styled-components";

export const Container = styled.div`
  background-color: #f2dbf0;
  width: 100%;
  height: 20vh;
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  padding: 1rem;
  margin-top: 35px;
`;
export const Boxcontainer = styled.div`
  width: 160px;
  height: 150px;
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
  flex-direction: column;
  height: 90%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Containerimg = styled.div`
  width: 20%;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const Containerinput = styled.div`
  width: 162px;
  text-align: center;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  button {
    width: 162px;
    border: none;
    outline: none;
    background-color: #e157ce;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Soci = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Copyright = styled.div`
  width: 20%;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: center;
  b {
    font-size: 8px;
  }
`;

export const Navfooter = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 5%;
  a {
    text-decoration: none;
    color: #000;
  }
`;
export const Item = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
`;
export const Itempay = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

export const Boxface = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`;
export const Boxtube = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  padding: 1px;
`;
