import React from 'react';

import cn from 'classnames';

import s from './Container.module.css';

const Container = ({ children, className }) => {
  const classNames = cn(s.root, className);

  return <div className={classNames}>{children}</div>;
};

export default Container;
