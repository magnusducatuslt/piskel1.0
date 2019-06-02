import { combineReducers } from 'redux';
import frames from './frameContainer';
import canvas from './canvas';

export default combineReducers({ frames, canvasState: canvas });
