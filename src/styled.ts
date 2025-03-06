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
    .footerContact{
      padding: 10px 25px;
      text-align: center;
      border: 2px solid #fff;
      border-radius: 5px;
      font-size: 0.875rem;
      font-weight: 700;
      letter-spacing: 0.75px;
      line-height: 28px;
      text-transform: uppercase;
      background: #fff;
      color: #B12079;
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


    footer {
      background-color: #efefef;
      padding: 0;
      top: 0;
      width: 100%;
    }

    footer nav {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }

    footer ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .link-list {
      list-style: none;
      padding-left: 0;
    }

    footer ul li a {
      display: inline-block;
      padding: 0.2rem 0.75rem;
    }

    footer a {
      font-weight: 700;
    }

    footer hr {
      width: 95%;
      margin-top: 0;
      margin-bottom: 0;
      border: 0;
      border-top: 1px solid rgba(0,0,0,.07);
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }

    .signature {
      margin-top: 1rem;
    }

    .signature .name {
      font-weight: 700;
    }

    .social-links {
      background-color: #727577;
      padding: 0;
    }

    .social-links .nav {
      -ms-flex-pack: center;
      justify-content: center;
    }

    .social-links .nav-link {
      color: rgba(255,255,255,.85);
      font-size: 1.25rem;
      margin: 0 0.5rem;
      transition: all .1s ease;
    }

    .icon {
      display: inline-block;
      width: 1em;
      height: 1em;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }

    .icon-twitter--white {
      background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="%23fff" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>');
    }

    .icon-facebook--white {
      background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 320 512"><path fill="%23fff" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>');
    }

    .icon-instagram--white {
      background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 448 512"><path fill="%23fff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>');
    }

    .icon-linkedin--white {
      background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 448 512"><path fill="%23fff" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>');
    }

    .icon-tiktok--white {
      background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 448 512"><path fill="%23fff" d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>');
    }

    header {
      background-color: #0a3370;
      padding: 0;
      position: sticky;
      top: 0;
      width: 100%;
      z-index: 1030;
      box-shadow: 0 0 50px 0 rgba(255,255,255,.1);
    }

    header>.container {
      position: relative;
    }

    .align-items-center {
      -ms-flex-align: center!important;
      align-items: center!important;
    }

    .no-gutters {
      margin-right: 0;
      margin-left: 0;
    }

    .row {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      margin-right: calc(-30px / 2);
      margin-left: calc(-30px / 2);
    }

    .btn:not(:last-child) {
      margin-right: 1.025rem;
    }

    .alert-warning .btn.alert-dismissible, .btn.btn-cta {
      color: #071b39;
      background-color: #fdb913;
      border-color: #fdb913;
      color: #0a3370;
    }

    .no-gutters>.col, .no-gutters>[class*=col-] {
      padding-right: 0;
      padding-left: 0;
    }

    .navbar.logo {
      text-align: center;
      display: inline-block;
    }

    .navbar {
      padding: 0;
    }

    .navbar {
      position: relative;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -ms-flex-align: center;
      align-items: center;
      -ms-flex-pack: justify;
      justify-content: space-between;
      padding: calc(1rem / 2) 1rem;
    }

    .navbar.logo .navbar-brand {
      margin-right: 0;
      margin-bottom: 0.2rem;
      margin-top: 0.2rem;
    }

    .navbar.logo>a>img.desktopLogoImg {
      display: none;
    }

    .navbar.logo>a>img {
      height: auto;
      width: 90px;
    }

    .container {
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
    }

    .d-flex {
      display: -ms-flexbox!important;
      display: flex!important;
    }

    .justify-content-end {
      -ms-flex-pack: end!important;
      justify-content: flex-end!important;
    }

    header nav.utility {
      float: right;
      max-width: 100%;
    }

    header nav.utility div, header nav.utility ul {
      -ms-flex-align: center;
      align-items: center;
      margin-bottom: 0;
    }

    header nav.utility div li:first-child, header nav.utility ul li:first-child {
      padding-left: 0.5rem;
    }

    header nav.utility ul li a:not(.btn-cta) {
      color: #fff;
      text-decoration: none;
    }

    .btn.btn-link {
      font-weight: 700;
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 1px;
    }

    header nav.utility ul li a {
      font-size: .75em;
      line-height: 1;
      margin-bottom: 0;
      display: block;
    }

    .navbar-nav .navbar-collapse {
      width: 100%;
      border-top: 5px solid #fdb913;
      animation: slidenavhide .25s;
      display: none;
    }

    .navbar-nav>li.nav-menuItem {
      border-bottom: 1px solid #3a4d6a;
    }

    .dropdown, .dropleft, .dropright, .dropup {
      position: relative;
    }

    .navbar-nav>li.nav-menuItem .nav-link {
      color: #fff;
      font-weight: 400;
      padding: 1rem 3rem 1rem 1rem;
    }

    .navbar-nav>li.nav-menuItem button.nav-link {
      width: 100%;
      background-color: transparent;
      border: none;
      text-align: left;
    }

    .navbar-nav>li.nav-menuItem .nav-link {
      color: #fff;
      font-weight: 400;
      padding: 1rem 3rem 1rem 1rem;
    }

    .navbar-nav>li.nav-menuItem button.nav-link>span {
      pointer-events: none;
    }

    .navbar-nav>li.nav-menuItem button.nav-link:after {
      content: ">";
      position: absolute;
      right: 1.25rem;
      font-size: 2rem;
      top: 0.75rem;
      font-weight: 700;
      color: #3a4d6a;
    }

    .navbar-nav {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
    }

    .col-7 {
      -ms-flex: 0 0 58.3333333333%;
      flex: 0 0 58.3333333333%;
      max-width: 58.3333333333%;
    }


      footer ul li {
          -ms-flex-preferred-size: auto;
          flex-basis: auto;
          text-align: center;
      }
      footer ul {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding: 0;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .signature .main-rows div {
        display: inline-block;
        padding-right: 0.75rem;
      }
      header {
        box-shadow: none;
      }
      .container {
        max-width: 1140px;
      }
      .col-lg-4 {
        -ms-flex: 0 0 33.3333333333%;
        flex: 0 0 33.3333333333%;
        max-width: 33.3333333333%;
      }
      .navbar.logo>a {
        margin: 0.4rem 1rem 1rem 0;
      }
      .navbar.logo .navbar-brand {
        margin: 0.7rem 0 0.6rem;
      }
      .navbar.logo>a>img.desktopLogoImg {
        display: inline-block;
        height: auto;
        width: 220px;
      }
      header nav.utility {
        background-color: transparent;
        margin: 1.4rem 0 1rem 1rem;
      }
      header nav.utility div li, header nav.utility ul li {
        padding: 0.5rem 0.5rem 0.5rem 0.5rem;
      }
      header nav.utility ul li a {
        font-size: 1em;
      }
      .navbar-nav .navbar-collapse {
        border-top: none;
      }
      .navbar-expand-lg .navbar-collapse {
        display: -ms-flexbox!important;
        display: flex!important;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
      }
      .navbar-nav>li.nav-menuItem:first-child {
        border-left: 1px solid #0a3370;
      }
      .navbar-nav>li.nav-menuItem {
        padding: 0.75rem 0 0.75rem;
        border-bottom: none;
        border-right: 1px solid #0a3370;
        text-align: center;
        width: 100%;
      }
      .navbar-nav>li.nav-menuItem>a.nav-link {
        padding: 0;
        text-align: center;
        display: inline-table!important;
      }
      .navbar-nav > li.nav-menuItem > a.nav-link {
        font-family: Oswald, OswaldFallback;
        font-weight: 700;
      }
      .navbar-nav>li.nav-menuItem button.nav-link {
        width: 0;
        height: 0;
        padding: 0;
        margin-right: 1.45rem;
        display: inline-table!important;
      }
      .d-lg-none {
        display: none!important;
      }
      .d-lg-block {
        display: block!important;
      }
      .navbar-nav>li.nav-menuItem button.nav-link:after {
        display: inline-block;
        position: relative;
        color: #fff;
        content: "";
        top: auto;
        right: auto;
        border-top: 0.3rem solid;
        border-right: 0.3rem solid transparent;
        border-bottom: 0;
        border-left: 0.3rem solid transparent;
        margin-left: 0.3rem;
        margin-right: 0.3rem;
        margin-bottom: 0.2rem;
      }
      .navbar-expand-lg .navbar-nav {
        -ms-flex-direction: row;
        flex-direction: row;
      }
      .navbar-nav {
        margin: auto;
        width: 100%;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }
      @media (min-width: 992px)
      .col-lg-8 {
      -ms-flex: 0 0 66.6666666667%;
      flex: 0 0 66.6666666667%;
      max-width: 66.6666666667%;
    }
    .search-toggle-container {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: center;
      align-items: center;
      width: 34px;
      margin: 1.4rem 0 1rem 2.5rem;
    }

    .icon {
      display: inline-block;
      width: 1em;
      height: 1em;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
  }

    .btn {
      display: inline-block;
      font-family: OpenSans,OpenSansFallback,sans-serif;
      font-weight: 700;
      color: rgba(0,0,0,.55);
      text-align: center;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: transparent;
      border: 1px solid transparent;
      padding: 0.375rem 1rem;
      font-size: 1rem;
      line-height: 1.7;
      border-radius: 0.1875rem;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

    button.btn.btn-primary.search-toggle {
      display: block;
      line-height: 1;
      color: #fff;
      background-color: #071b39;
      border-color: #071b39;
      margin: 0;
      width: 100%;
      padding: 8px;
      border-radius: 100%;
      height: 36px;
  }

  .icon-search--white {
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="%23fff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>');

}

button.btn.btn-primary.search-toggle .icon {
  pointer-events: none;
}

header>nav {
  background-color: #071b39;
}

.navbar {
  padding: 0;
}

.navbar-brand {
  display: inline-block;
  padding-top: calc((0.575rem)/ 2);
  padding-bottom: calc((0.575rem)/ 2);
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
}

`;
