import React from 'react';
import s from './Header.module.css';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
  return (
    <div>
      <header className={s.root}>
        <div className={s.header}>
          <div className={s.container}>
            <div className={s.logo}></div>
            <ul className={s.nav}>
              {MENU.map((element) => (
                <li>
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
