import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFrame, deleteFrame, cloneFrame } from '../../redux/actions';
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
    const { frames, addFrame, cloneFrame, deleteFrame } = this.props;
    const filledByFrames = this.fillContainerByFrames(
      frames.framesArray,
      deleteFrame,
      cloneFrame
    );
    filledByFrames.push(
      <NewFrame key="new" onClick={() => addFrame()} value={`Add new frame`} />
    );
    return <div className="frame-container">{filledByFrames}</div>;
  };
}
const mapStateToProps = ({ frames }) => {
  return {
    frames
  };
};
const mapDispatchToProps = {
  addFrame,
  cloneFrame,
  deleteFrame
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrameContainer);
