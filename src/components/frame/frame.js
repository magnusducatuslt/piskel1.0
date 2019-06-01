import React from 'react';
import './frame.css';
const Frame = ({ onDubl, onDel, index }) => {
  return (
    <div className="frame">
      <span>{index}</span>
      <div onClick={onDel}>delete</div>
      <div onClick={onDubl}>clone</div>
    </div>
  );
};
export default Frame;
