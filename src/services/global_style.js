import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, html, #root {
    height: 100%;
  }

  body {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    -webkit-font-smoothing: antialiased !important;
  }
`;