import { DELETE_FRAME, CLONE_FRAME } from '../actionTypes';
export const deleteFrame = ({ payload }) => {
  return {
    type: DELETE_FRAME,
    payload
  };
};
export const cloneFrame = () => {
  return {
    type: CLONE_FRAME,
    payload
  };
};
