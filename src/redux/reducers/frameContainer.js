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
    case DELETE_FRAME:
      return {
        ...state
      };
    case CLONE_FRAME:
      /**
       * 1. here slice to id and from id
       * 2. push in array "to id"
       * 3. concat(from id)
       * */

      return { ...state };
    default:
      return state;
  }
}
