import {
  DELETE_FRAME,
  CLONE_FRAME,
  ADD_FRAME,
  SAVE_MOUSE_CORDINATES,
  SAVE_FRAME_STATE,
  STOP_DRAWING,
  START_DRAWING,
  REDRAWING_FRAME,
  SET_CURRENT_FRAME,
  CHANGE_CURRENT_FRAME
} from '../actionTypes';
export const deleteFrame = ({ payload }) => {
  return {
    type: DELETE_FRAME,
    payload
  };
};
export const cloneFrame = ({ payload }) => {
  return {
    type: CLONE_FRAME,
    payload
  };
};
export const addFrame = () => {
  return {
    type: ADD_FRAME
  };
};
export const saveFrameState = ({ payload }) => {
  return {
    type: SAVE_FRAME_STATE,
    payload
  };
};
export const saveMouseCordinates = ({ payload }) => {
  return {
    type: SAVE_MOUSE_CORDINATES,
    payload
  };
};
export const stopDrawing = ({ payload }) => {
  return {
    type: STOP_DRAWING,
    payload
  };
};
export const startDrawing = ({ payload }) => {
  return {
    type: START_DRAWING,
    payload
  };
};
export const redrawingFrame = ({ payload }) => {
  return {
    type: REDRAWING_FRAME,
    payload
  };
};
export const setCurrentFrame = ({ payload }) => {
  return {
    type: SET_CURRENT_FRAME,
    payload
  };
};
export const changeCurrentFrame = ({ payload }) => {
  return {
    type: CHANGE_CURRENT_FRAME,
    payload
  };
};
export const saveMouseCordinatesBegin = ({ payload }) => {
  return function(dispatch) {
    dispatch(saveFrameState({ payload }));
    dispatch(startDrawing({ payload }));
  };
};
export const stopMouseCordinatesEnd = ({ payload }) => {
  return function(dispatch) {
    dispatch(saveFrameState({ payload }));
    dispatch(stopDrawing({ payload }));
  };
};
export const trackMouse = ({ payload }) => {
  return function(dispatch) {
    dispatch(saveFrameState({ payload }));
    dispatch(saveMouseCordinates({ payload }));
  };
};
