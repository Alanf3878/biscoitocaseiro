import styled from "styled-components";

export const DiscountContainer = styled.div`
width: 100%;
display: flex;
height: 60px;
align-items: center;
justify-content: space-between;
` 

export const Box = styled.div`
display: flex;
align-items: center;
width: 40%;
&:hover {
    transform: scale(102%);
    cursor: pointer;
  }
`

export const TitleContainer = styled.div`
background-color: #F2DBF0 ;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
height: 80px;
`

export const Boxinput = styled.div`
display: flex;
width: 20%;
background-color: #FFF; 
padding: 3px 0.2em 0 0.6em;
border-radius: 50px;
height: 35px;
&:hover {
    transform: scale(102%);
    cursor: pointer;
  }
;
`

export const Input = styled.input`
border: none;
outline: none;
`

export const Boxlogin = styled.div `
display: flex;
justify-content: space-around;
align-items: center;
height: auto;
width:20%;
`

export const Login = styled.div`
display:flex;
justify-content: space-around;
align-items: center;
width: 30%;
&:hover {
    transform: scale(102%);
    cursor: pointer;
  }
`

export const FlexContainer = styled.section`
width: 24%;
display: flex;
justify-content: flex-end;
`

export const Containerbox = styled.div`
width: 50%;
display: flex;
justify-content: flex-end;
`

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

export const Title = styled.h1`
font-family: 'Fredoka One';
font-size: 40px;
`