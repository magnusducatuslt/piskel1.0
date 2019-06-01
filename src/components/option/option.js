import React from 'react';

const Option = ({ children, name }) => {
  return <div className={name}>{children}</div>;
};

export default Option;
