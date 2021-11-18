import styled from "styled-components";

export const Nav = styled.ul`
  width: 35%;
  display: flex;
  justify-content: space-evenly;
`;
export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ItemNav = styled.li`
  list-style: none;
  &:hover {
    transform: scale(100%);
    cursor: pointer;
  }

 
  font-size: 16px;
  @media (max-width: 1200px) {
    font-size: 10px;
  }

`;
export const Boxcontainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  img {
  width: auto;
  @media (max-width: 1200px) {
    height: 20px;
  }
}
`;
