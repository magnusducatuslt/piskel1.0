import {
  DELETE_FRAME,
  CLONE_FRAME,
  ADD_FRAME,
  SAVE_FRAME_STATE,
  SET_CURRENT_FRAME
} from '../actionTypes';
const initialState = {
  frameSchemes: {
    index: null,
    shapes: [],
    element: null
  },
  currentFrame: {
    index: null,
    shapes: [],
    backgroundUrl: ``
  },
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
      return {
        ...state,
        framesArray: addFrameArray.concat(state.frameSchemes)
      };
    case SAVE_FRAME_STATE:
      const currFrameState = { ...state.currentFrame };
      const saveFramePayload = { ...action.payload.frameContainer };
      currFrameState.shapes.concat(saveFramePayload.cordinates);
      currFrameState.backgroundUrl = saveFramePayload.backgroundUrl;
      return {
        ...state,
        currentFrame: currFrameState
      };
    case SET_CURRENT_FRAME:
      const oldcurrentFrame = { ...state.currentFrame };
      oldcurrentFrame.index = action.payload.key;
      oldcurrentFrame.element = state.framesArray[oldcurrentFrame.index];

      return {
        ...state,
        currentFrame: oldcurrentFrame
      };
    default:
      return state;
  }
}
