import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   
    * { 
        box-sizing: border-box;
        margin:0;
        padding:0;
        font-family: 'Roboto', sans-serif;
        &::after, &::before {
            box-sizing: border-box;
        }
    }

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
    } 

    .title {
        color: palevioletred;
    } 
    
`;
