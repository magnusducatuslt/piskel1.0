import React, { Fragment } from 'react';
import './animation.css';

const Animation = () => {
  return (
    <Fragment>
      <div className='animation-window'>
        window
      </div>
      <div className='animation-config'>
        <button>2 FPS</button>
        <button>4 FPS</button>
        <button>8 FPS</button>
      </div>
    </Fragment>
  );
};

export default Animation;
