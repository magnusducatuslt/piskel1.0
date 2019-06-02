import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addFrame,
  deleteFrame,
  cloneFrame,
  setCurrentFrame
} from '../../redux/actions';
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
  fillContainerByFrames = (array, off, cloneElem, choose) => {
    return array.length
      ? array.map((elem, index) => (
          <Frame
            key={index}
            onChoose={choose}
            onDubl={cloneElem}
            onDel={off}
            index={index}
            background={null}
          />
        ))
      : [];
  };

  handleExecution = func => e => {
    e.preventDefault();
    const newArgumnets = [].concat(arguments)
    newArgumnets[0] = {payload:{
      key:e.target.parentNode.parentNode.parentNode.querySelector(`.frame__index`).innerText
    }}
    return func.apply(this, newArgumnets);
  };
  render = () => {
    const {
      frames,
      addFrame,
      cloneFrame,
      deleteFrame,
      setCurrentFrame
    } = this.props;
    console.log(frames);
    const filledByFrames = this.fillContainerByFrames(
      frames.framesArray,
      this.handleExecution(deleteFrame),
      this.handleExecution(cloneFrame),
      this.handleExecution(setCurrentFrame)
      
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
  deleteFrame,
  setCurrentFrame
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrameContainer);
