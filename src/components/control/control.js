import React, { Component } from 'react';
import './control.css';
import color from '../../img/bu.png'
import dropper from '../../img/pip.png'
import drag from '../../img/per.png'
import shape from '../../img/tran.png'

class Control extends Component {
  render = () => {
    return (
      <div className='tools'>
        <div className='tools-1'>
          <img className='color' src={color} alt='color'></img>
          <img className='dropper' src={dropper} alt='dropper'></img>
        </div>
        <div className='tools-2'>
          <img className="drag" src={drag} alt='drag'></img>
          <img className="shape" src={shape} alt='transform'></img>
        </div>
      </div>
    );
  };
}

export default Control;
