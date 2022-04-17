import React from 'react';

import logo from '../../assets/logo.png';

import s from './Header.module.css';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
  return (
    <div>
      <header className={s.root}>
        <div className={s.headerWrap}>
          <div className={s.header}>
            <div className={s.logo}>
              <img src={logo} alt='Logo' />
            </div>
            <ul className={s.nav}>
              {MENU.map((element) => (
                <li key={element}>
                  <a href='#'>{element}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
