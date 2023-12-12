import { createGlobalStyle } from "styled-components";
import { Open_Sans, Roboto } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

export default createGlobalStyle`

  @font-face {
    font-family: 'Rubik Bubbles';
    src: url(./RubikBubbles-Regular.ttf);
  }

  *, 
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #22babb; 
    --secondary-color: #f24405;
    --primary-background: #d3d3d3;
  }

  body {
    margin: 0;
    font-family: ${roboto.style.fontFamily};
    padding: 2rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;
