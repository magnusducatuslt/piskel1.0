import { DELETE_FRAME, CLONE_FRAME, ADD_FRAME } from '../actionTypes';
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
      const deletePayload = { ...action.payload };
      const deleteArray = [...state.framesArray];
      deleteArray.splice(deletePayload, 1);
      return {
        ...state,
        framesArray: [...deleteArray]
      };
    case CLONE_FRAME:
      /**
       * 1. here slice to id and from id
       * 2. push in array "to id"
       * 3. concat(from id)
       * */
      const clonePayload = { ...action.payload };
      const cloneArray = [...state.framesArray];
      cloneArray.splice(clonePayload.key, 0, cloneArray[clonePayload.key]);

      return { ...state, framesArray: [...cloneArray] };
    case ADD_FRAME:
      const addFrameArray = [...state.framesArray];
      return { ...state, framesArray: addFrameArray.push(state.frameSchemes) };
    default:
      return state;
  }
}