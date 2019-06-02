import {
  START_DRAWING,
  STOP_DRAWING,
  SAVE_MOUSE_CORDINATES,
  REDRAWING_FRAME
} from '../actionTypes';
const initialState = {
  mouse: {
    x: null,
    y: null,
    isDown: null
  },
  currentLayout: {
    operations: []
  }
};

export default function canvasReducer(state = initialState, action) {
  let currentLayout = {
    operations: []
  };
  switch (action.type) {
    case START_DRAWING:
      return saveMouseMove({ state, action });
    case STOP_DRAWING:
      return saveMouseMove({ state, action });
    case SAVE_MOUSE_CORDINATES:
      return saveMouseMove({ state, action });
    case REDRAWING_FRAME:

    default:
      return { ...state };
  }
}

function saveMouseMove({ state, action }) {
  const { mouse } = state;
  const { x, y, isDown } = action.payload;
  mouse.x = x;
  mouse.y = y;
  mouse.isDown = isDown;
  return { ...state, mouse };
}
