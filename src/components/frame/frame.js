import React from 'react';
import './frame.css';
const Frame = ({ onChoose, onDubl, onDel, index, background }) => {
  return (
    <div className="frame" style={{ backgroundImage: `url(${background})` }}>
      {/* DO NOT DELETE THIS CLASS NAME!!! I GET INDEX OF ELEM FROM HERE!!! */}
      <span className="frame__index">{index}</span>
      <div onClick={onChoose}>choose</div>
      <div onClick={onDel}>delete</div>
      <div onClick={onDubl}>clone</div>
    </div>
  );
};
export default Frame;
