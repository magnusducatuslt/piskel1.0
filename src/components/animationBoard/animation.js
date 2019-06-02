import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
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
class Animation extends Component {
  reDrawing([...shape]) {
    for (let i = 0; i < shape.length; i++) {
      var canvas = document.getElementById('window-canvas');
      var ctx = canvas.getContext('2d');
      ctx.beginPath();
      for (let s = 0; s < shape[i].length; s++) {
        ctx.fillRect(shape[i][s][0], shape[i][s][1], 10, 10);
      }
      ctx.closePath();
    }
  }
  render = () => {
    if (this.props.frames.framesArray.length > 0) {
      const shape = [...this.props.frames.framesArray];
      animate(shape, this.reDrawing);
    }
    return (
      <Fragment>
        <div id="ww" className="animation-window" />
        <div className="animation-config">
          <button>2 FPS</button>
          <button>4 FPS</button>
          <button>8 FPS</button>
          <button onClick={full}>full screen</button>
        </div>
      </Fragment>
    );
  };
}

function animate(shape) {
  console.log(shape);
  let requestId;
  const fps = shape.length;
  let count = 0;
  const array = [...shape];
  function loop() {
    requestId = undefined;
    if (count >= fps) count = 0;
    console.log(array[count]);
    // var canvas = document.getElementById('window-canvas');
    // var ctx = canvas.getContext('2d');
    draw(array[count].backgroundUrl);
    start();
  }

  function start() {
    if (!requestId) {
      setTimeout(function() {
        requestId = window.requestAnimationFrame(loop);
      }, 1000 / fps);
    }
  }

  function stop() {
    if (requestId) {
      window.cancelAnimationFrame(requestId);
      requestId = undefined;
    }
  }

  function draw(shaped) {
    document
      .getElementById('ww')
      .style.setProperty('background-image', `url(${shaped})`);
    count++;
  }
  start();
}
const mapStateToProps = ({ frames }) => {
  return {
    frames
  };
};
export default connect(mapStateToProps)(Animation);
