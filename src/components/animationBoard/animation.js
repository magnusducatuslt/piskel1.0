/**
 * TODO DRY, and animate to class
 */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { setValueFPS } from '../../redux/actions';
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
  onClick2 = e => {
    e.preventDefault();
    const { setValueFPS } = this.props;
    setValueFPS({ payload: 2 });
  };
  onClick4 = e => {
    e.preventDefault();
    const { setValueFPS } = this.props;
    setValueFPS({ payload: 4 });
  };
  onClick8 = e => {
    e.preventDefault();
    const { setValueFPS } = this.props;
    setValueFPS({ payload: 8 });
  };
  render = () => {
    if (this.props.frames.framesArray.length > 0) {
      const shape = [...this.props.frames.framesArray];
      animate(shape, this.props.frames.isAnimate, this.props.frames.fps);
    }

    return (
      <Fragment>
        <div id="ww" className="animation-window" />
        <div className="animation-config">
          <button onClick={this.onClick2}>2 FPS</button>
          <button onClick={this.onClick4}>4 FPS</button>
          <button onClick={this.onClick8}>8 FPS</button>
          <button onClick={full}>full screen</button>
        </div>
      </Fragment>
    );
  };
}

function animate(shape, isAnimate, fpS = 2) {
  let requestId;
  const fps = fpS;
  let count = 0;
  const length = shape.length;
  const array = [...shape];
  function loop() {
    requestId = undefined;
    if (count >= length) count = 0;
    //console.log(array[count]);
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
  if (isAnimate) {
    start();
  }
}
const mapStateToProps = ({ frames }) => {
  return {
    frames
  };
};
const mapDispatchToProps = {
  setValueFPS
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Animation);
