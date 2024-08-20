import styled from "styled-components";
import './index.css'

export const Main = styled.main`
display: flex;
align-items: start;
justify-content: center;
flex-direction: row;
width: 100dvw;
height: auto;

`;
export const box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 50%;
height: auto;
border: 0.5px solid #121212;

`;
export const title = styled.h1`
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
width: 100%;
border-bottom: 0.5px solid #121212;

`;
export const text = styled.span`
padding: 10px;
text-align: center;
font-size: 10px;
font-family : 'Roboto';
font-weight: normal;

`; 
export const textRemote = styled(text)` 
font-family: 'archive';
font-weight: normal;
`; 