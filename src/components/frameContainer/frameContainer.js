import React, { Component } from 'react';
import { connect } from 'react-redux';
import Frame from '../frame';
import { NewFrame } from '../buttons';
import './frameContainer.css';
/**
 * 1. when add frame, frame init with empty content
 * 2. when drag frame change number in order
 * 3. when create something on canvas board it thumbnail in current frame
 * 4. when click delete change current delete and other sort in order
 * 5. when click dublicate will create dublicate of current frame and push rest down
 */
class FrameContainer extends Component {
  fillContainerByFrames = (array, off, cloneElem) => {
    return array.length
      ? array.map((elem, index) => (
          <Frame key={index} onDubl={cloneElem} onDel={off} index={index} />
        ))
      : [];
  };
  render = () => {
    const { frames } = this.props;
    //const filledByFrames = this.fillContainerByFrames();
    return (
      <div className="frame-container">
        <NewFrame
          onClick={() => console.log(`new frame`)}
          value={`Add new frame`}
        />
      </div>
    );
  };
}
const mapStateToProps = ({ frames }) => {
  return {
    frames
  };
};
export default connect(mapStateToProps)(FrameContainer);
