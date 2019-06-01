import React, { Component } from 'react';
import './canvas.css';

class Canvas extends Component {
  constructor() {
    super();
    this.container = React.createRef();
    this.canvas = React.createRef();
  }
  componentDidMount = () => {
    const layout = document.createElement('canvas');
    layout.id = 'canvas';
    layout.width = this.container.current.getBoundingClientRect().width;

    layout.height = this.container.current.getBoundingClientRect().height;

    this.container.current.appendChild(layout);
    this.draw();
  };
  mouseUp = e => {
    e.preventDefault();
    console.log('mouse Up');
  };
  mouseDown = e => {
    e.preventDefault();
    console.log('mouse Down');
    // e.clientY;
    // e.clientX;
  };
  draw = () => {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
    }
  };
  render = () => {
    return (
      <div
        className="canvas"
        ref={this.container}
        onMouseDown={this.mouseDown}
        onMouseUp={this.mouseUp}
      />
    );
  };
}
export default Canvas;
