import React, { Fragment } from 'react';
import './header.css';
import logo1 from '../../img/Shape.png';
import logo2 from '../../img/conf.png';

const Header = () => {
  return (
    <Fragment>
      <img class="menu" src={logo1} />
      <h2>Code-Jam</h2>
      <img class="conf" src={logo2} />
    </Fragment>
  );
};

export default Header;
