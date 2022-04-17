import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import s from './Container.module.css';

const Container = ({ children, className }) => {
  const classNames = cn(s.root, className);

  return <div className={classNames}>{children}</div>;
};

Container.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
};

export default Container;
