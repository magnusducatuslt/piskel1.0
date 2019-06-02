import React from 'react';
import './frame.css';
import del from '../../img/delete.png'
import cop from '../../img/copy.png'
import con from '../../img/drag.png'

const Frame = ({ onDubl, onDel, index }) => {
  return (
    <div className="frame">
      <div className="top">
        <div>{index}</div>
        <div onClick={onDel}>
          <img src={del} alt="delete"></img>
        </div>
      </div>
      <div className="bottom">
        <div>
          <img src={con} alt="config"></img>
        </div>
        <div onClick={onDubl}>
          <img src={cop} alt="clone"></img>
        </div>
      </div>
    </div>
  );
};
export default Frame;
