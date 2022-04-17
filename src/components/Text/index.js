import React from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';

import s from './Text.module.css';

const Text = ({ element, children, className, strong, italic, disabled }) => {
  console.log('ELEMENT', element);

  const classNames = cn(s.root, className, {
    [s.strong]: strong,
    [s.italic]: italic,
    [s.disabled]: disabled,
  });

  return React.createElement(
    element,
    {
      className: classNames,
    },
    children
  );
};

Text.defaultProps = {
  strong: false,
  italic: false,
  disabled: false,
};

Text.propTypes = {
  element: propTypes.string.isRequired,
  children: propTypes.node,
  className: propTypes.string,
  strong: propTypes.bool,
  italic: propTypes.bool,
  disabled: propTypes.bool,
};

export default Text;
