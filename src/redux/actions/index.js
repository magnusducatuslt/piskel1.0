import {
  DELETE_FRAME,
  CLONE_FRAME,
  ADD_FRAME,
  SAVE_MOUSE_CORDINATES_BEGIN
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
export const saveMouseCordinatesBegin = ({ payload }) => {
  return {
    type: SAVE_MOUSE_CORDINATES_BEGIN,
    payload
  };
};
