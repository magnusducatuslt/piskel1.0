import React, { Fragment } from 'react';
import './header.css';
import logo1 from '../../img/Shape.png';
import logo2 from '../../img/conf.png';

var elem = document.documentElement;
const full = () => {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

const Header = () => {
  return (
    <Fragment>
      <button className ="fullScreen" onClick={full}><img className="menu" src={logo1} /></button>
      <h2>Code-Jam</h2>
      <img className="conf" src={logo2} />
    </Fragment>
  );
};

export default Header;
