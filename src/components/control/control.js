import React, { Component } from 'react';

class Control extends Component {
  render = () => {
    return (
      <div>
        <div>
          <div className="color">color</div>
          <div className="dropper">dropper</div>
        </div>
        <div>
          <div className="drag">drag</div>
          <div className="shape">dropper</div>
        </div>
      </div>
    );
  };
}

export default Control;
