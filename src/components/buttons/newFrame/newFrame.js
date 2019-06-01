import React from 'react';
import './newFrame.css';
const NewFrame = ({ value, onClick }) => {
  return (
    <div className="new-frame">
      <button onClick={onClick}>{value}</button>
    </div>
  );
};

export default NewFrame;
