import { createGlobalStyle } from "styled-components";


const globalStyle = createGlobalStyle`
 
 * {
     padding: 0;
     margin: 0;
     box-sizing: border-box;
 }



 html, body, #root {
     height: 100%;
     margin: 0;
 }

 button {
    background-color: transparent;
}

 a {
     text-decoration: none;
     outline: none;
 }

 body {
    font-family: 'Poppins', sans-serif;
    background-color: lightgray;
 }

/*  

body {
    font-family: 'Poppins', sans-serif;
    background-image: ;
    background-repeat: no-repeat;
    background-color: lightyellow;
    background-size: cover;
    background-attachment:fixed;
}
 */






`

export default globalStyle;