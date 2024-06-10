import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family:Rethink ;
        src: url('/fonts/RethinkSans-VariableFont_wght.ttf');
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Rethink;
    }
    /* 
    body { 
        background: url('src/assets/img/pexels-juraj-masar-253905.jpg') no-repeat;
         background-position: center;
         background-size: cover;
    }
    */
`;
