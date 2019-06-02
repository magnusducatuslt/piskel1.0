import React, { Fragment } from 'react';
import './animation.css';

const full = () => {
  var elem = document.getElementById('ww');
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
};

const Animation = () => {
  return (
    <Fragment>
      <div id="ww" className="animation-window">
        window
      </div>
      <div className="animation-config">
        <button>2 FPS</button>
        <button>4 FPS</button>
        <button>8 FPS</button>
        <button onClick={full}>full screen</button>
      </div>
    </Fragment>
  );
};

function animate() {
  var requestId;

  function loop(time) {
    requestId = undefined;

    doStuff(time);
    start();
  }

  function start() {
    if (!requestId) {
      requestId = window.requestAnimationFrame(loop);
    }
  }

  function stop() {
    if (requestId) {
      window.cancelAnimationFrame(requestId);
      requestId = undefined;
    }
  }

  function doStuff(time) {}

  document.querySelector('#start').addEventListener('click', function() {
    start();
  });

  document.querySelector('#stop').addEventListener('click', function() {
    stop();
  });
}
export default Animation;
