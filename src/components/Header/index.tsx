import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { ThemeContext } from '../../contexts/themeContext';
import type { IThemeContext } from '../../contexts/themeContext';
import HeaderInput from '../HeaderInput';
import Logo from '../Icons/Logo';
import LocaleSelector from '../LocaleSelector';
import { HeaderContent, HeaderContentWrapper, HeaderWrapper } from './styled';

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext<IThemeContext>(ThemeContext);
  const toggleDarkMode = (checked: boolean): void => {
    if (checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <header>
      <div className="container">
        <div className="row no-gutters align-items-center">
          <div className="col-3 col-lg-4">
            <div className="navbar logo" data-placeholder="header-top-left" data-rendering="Logo">
              <a className="navbar-brand" href="/" title="Southern New Hampshire University">
                <img src="https://www.snhu.edu/-/media/images/logos/snhu-logo-long-white.ashx?h=72&amp;iar=0&amp;w=260&amp;hash=95EE135C8AFEC15432349F15D45E64A9" className="desktopLogoImg" alt="Southern New Hampshire University" width="260" height="72" />
              </a>
            </div>
          </div>
          <div className="col-7 col-lg-8 d-flex justify-content-end align-items-center">
            <div className="search-toggle-container" style={{width: "100%", zIndex: "1"}}>
              <HeaderInput />
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-nav navbar-expand-lg mega-menu" aria-label="Primary Navigation" data-placeholder="header-bottom" data-rendering="Primary Navigation">
        <div className="container">
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav">
              <li className="nav-menuItem dropdown">
                <a className="nav-link d-none d-lg-block" href="/program-finder">Academic Programs</a>
                <button className="nav-link" aria-label="Academic Programs"><span className="show-lg d-lg-none">Academic Programs</span><span className="d-none d-lg-block"></span></button>
              </li>
              <li className="nav-menuItem dropdown">
                <a className="nav-link d-none d-lg-block" href="/admission">Admission</a>
                <button className="nav-link" aria-label="Admission"><span className="show-lg d-lg-none">Admission</span><span className="d-none d-lg-block"></span></button>
              </li>
              <li className="nav-menuItem dropdown">
                <a className="nav-link d-none d-lg-block" href="/tuition-and-financial-aid">Tuition &amp; Financial Aid</a>
                <button className="nav-link" aria-label="Tuition &amp; Financial Aid"><span className="show-lg d-lg-none">Tuition &amp; Financial Aid</span><span className="d-none d-lg-block"></span></button>
              </li>
              <li className="nav-menuItem dropdown">
                <a className="nav-link d-none d-lg-block" href="/student-experience/campus-experience">Campus</a>
                <button className="nav-link" aria-label="Campus"><span className="show-lg d-lg-none">Campus</span><span className="d-none d-lg-block"></span></button>
              </li>
              <li className="nav-menuItem dropdown">
                <a className="nav-link d-none d-lg-block" href="/about-us">About SNHU</a>
                <button className="nav-link" aria-label="About SNHU"><span className="show-lg d-lg-none">About SNHU</span><span className="d-none d-lg-block"></span></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
