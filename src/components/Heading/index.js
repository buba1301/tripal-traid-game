import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

import s from './Heading.module.css';

const Heading = ({ children, level, className }) => {
  console.log('ClassNames', className);

  const el = `h${level}`;

  const classNames = cn(s.root, className, s[`level${level}`]);

  return React.createElement(
    el,
    {
      className: classNames,
    },
    children
  );
};

Heading.propTypes = {
  children: propTypes.node,
  level: propTypes.number,
  className: propTypes.string,
};

export default Heading;
