import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  saveMouseCordinatesBegin,
  stopMouseCordinatesEnd,
  trackMouse
} from '../../redux/actions';
import './canvas.css';

class Canvas extends Component {
  constructor() {
    super();
    this.container = React.createRef();
    this.canvas = React.createRef();
    this.isDown = false;
  }
  componentDidMount = () => {
    const { canvasState } = this.props;
    this.isDown = canvasState.mouse.isDown;
    const layout = document.createElement('canvas');
    layout.id = 'canvas';
    // layout.width = this.container.current.getBoundingClientRect().width;

    // layout.height = this.container.current.getBoundingClientRect().height;

    this.container.current.appendChild(layout);
  };
  mouseUp = e => {
    e.preventDefault();
    console.log('mouse Up', e, e.offsetY);
    this.drawEnd();
    this.props.stopMouseCordinatesEnd({
      payload: {
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
        isDown: false,
        isNew: false,
        backgroundUrl: null
      }
    });
    //document.getElementById('img').src = this.canvas.current.toDataURL();
  };
  mouseDown = e => {
    e.preventDefault();
    console.log('mouse Down', e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    this.props.saveMouseCordinatesBegin({
      payload: {
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
        isDown: true,
        isNew: true,
        backgroundUrl: null
      }
    });
    this.drawBegin(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };
  mouseMove = e => {
    e.preventDefault();
    if (this.props.canvasState.mouse.isDown) {
      this.drawMove(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      this.props.trackMouse({
        payload: {
          x: e.nativeEvent.offsetX,
          y: e.nativeEvent.offsetY,
          isDown: true,
          isNew: false,
          backgroundUrl: null
        }
      });
    }
  };
  drawBegin = (x, y) => {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.beginPath();
      ctx.fillRect(x, y, 10, 10);
    }
  };
  drawMove = (x, y) => {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.fillRect(x, y, 10, 10);
    }
  };
  drawEnd = () => {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.closePath();
    }
  };
  render = () => {
    console.log('rednder');
    return (
      <div>
        <div
          className="canvas"
          ref={this.container}
          onMouseDown={this.mouseDown}
          onMouseUp={this.mouseUp}
          onMouseMove={this.mouseMove}
        />
      </div>
    );
  };
}
const mapStateToProps = ({ frames, canvasState }) => {
  return {
    frames,
    canvasState
  };
};
const mapDispatchToProps = {
  saveMouseCordinatesBegin,
  stopMouseCordinatesEnd,
  trackMouse
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
