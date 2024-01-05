import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
    @import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);
    @font-face {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 300;
      src: url(https://fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 300;
      src: url(https://fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjx4wXiWtFCc.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 700;
      src: url(https://fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 700;
      src: url(https://fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    
    
    body {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        margin: 0;
    }

    :root {
      line-height: 1.5;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.87);
      background-color: #242424;

      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    body {
      margin: 0;
      display: flex;
      min-width: 320px;
      min-height: 100vh;
    }

    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      :root {
        color: #213547;
        background-color: #ffffff;
      }
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }

    #root {
      width: 100%;
      margin: 0 auto;
      text-align: center;
    }
    .App {
      height: 100%;
      background-color: var(--sdc-palette-primary-main);
      font-family: var(--sdc-typography-fontFamilySystem);
    }
  
    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.react:hover {
      filter: drop-shadow(0 0 2em #61dafbaa);
    }

    @keyframes logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      a:nth-of-type(2) .logo {
        animation: logo-spin infinite 20s linear;
      }
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    [data-rfkid].rfk2_html_block.rfk2_home_hero .hero-background {
      background-image: url(https://wwwsitecorecom.azureedge.net/-/media/sitecoresite/images/home/_/hero-v2/sitecore-home-hero-v01-052722_72dpi-small.jpg?md=20220627T131729Z);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: -1;
    }
    [data-rfkid].rfk2_html_block.rfk2_home_hero .html_block {
      padding-bottom: 80px;
      padding-top: 80px;
      position: relative;
      z-index: 1;
    }
    [data-rfkid].rfk2_html_block.rfk2_home_hero .hero-content {
      display: flex;
      justify-content: flex-start;
      padding-left: 10%;
    }
    [data-rfkid].rfk2_html_block.rfk2_home_hero .hero-main-content {
      -webkit-backdrop-filter: blur(24px);
      backdrop-filter: blur(24px);
      background: #f6f6f629;
      border-radius: 5px;
      box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%), inset 0 0 200px rgb(255 255 255 / 30%);
      color: #ffffff;
      overflow: hidden;
      padding: 2em 3em;
      position: relative;
      width: 400px;
      z-index: 1;
    }
    [data-rfkid].rfk2_html_block.rfk2_home_hero h1 {
      font-size: 2.5rem;
    }
    [data-rfkid].rfk2_html_block.rfk2_home_hero .hero-main-content {
      -webkit-backdrop-filter: blur(24px);
      backdrop-filter: blur(24px);
      background: #f6f6f629;
      border-radius: 5px;
      box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%), inset 0 0 200px rgb(255 255 255 / 30%);
      color: #ffffff;
      overflow: hidden;
      padding: 2em 3em;
      position: relative;
      width: 400px;
      z-index: 1;
    }
`;
