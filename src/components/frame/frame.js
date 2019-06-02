import React from 'react';
import './frame.css';
import del from '../../img/delete.png';
import cop from '../../img/copy.png';
import con from '../../img/drag.png';

const Frame = ({ onDubl, onDel, onChoose, onChange, index, background }) => {
  return (
    <div
      className="frame"
      onClick={onChange}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="top">
        <div className="frame__index">{index}</div>
        <div onClick={onDel}>
          <img src={del} alt="delete" />
        </div>
      </div>
      <div className="bottom">
        <div onClick={onChoose}>
          <img src={con} alt="config" />
        </div>
        <div onClick={onDubl}>
          <img src={cop} alt="clone" />
        </div>
      </div>
    </div>
  );
};
export default Frame;
