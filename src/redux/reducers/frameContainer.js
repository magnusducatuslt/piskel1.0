import { DELETE_FRAME, CLONE_FRAME } from '../actionTypes';
const initialState = {
  frameSchemes: {
    background: null
  },
  currentFrame: null,
  framesArray: []
};

export default function frameContainerReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
