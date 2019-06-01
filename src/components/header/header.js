import React, {Fragment} from 'react';
import './header.css';
import logo1 from '../../img/Shape.png'
import logo2 from '../../img/conf.png'

const Header = () => {
  return ( <Fragment>
    <img className="menu" src={logo1}></img>
    <h2>Code-Jam</h2>
    <img className="conf" src={logo2}></img>
    </Fragment>
  );
};

export default Header;