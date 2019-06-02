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
    isDown: null,
    operations: []
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
      return saveMouseMove({ state, currentLayout, action });
    case STOP_DRAWING:
      return saveMouseMove({ state, currentLayout, action });
    case SAVE_MOUSE_CORDINATES:
      return saveMouseMove({ state, currentLayout, action });
    case REDRAWING_FRAME:

    default:
      return { ...state };
  }
}

function saveMouseMove({ state, currentLayout, action }) {
  const { mouse } = state;
  currentLayout.operations.concat(state.currentLayout.operations);
  const { x, y, isDown, operations } = action.payload.canvas;
  mouse.x = x;
  mouse.y = y;
  mouse.isDown = isDown;
  currentLayout.operations.push(operations);
  return { ...state, mouse, currentLayout };
}
