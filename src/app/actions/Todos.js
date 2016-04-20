import { ADD_TO_DO } from '../constants/ActionTypes';
import { EDIT_TO_DO } from '../constants/ActionTypes';
import { SAVE_TO_DO } from '../constants/ActionTypes';
import { DELETE_TO_DO } from '../constants/ActionTypes';

export function addToDo(value) {
  return {
    type: ADD_TO_DO,
    value,
  };
}

export function editToDo(value, index) {
  return {
    type: EDIT_TO_DO,
    value,
    index,
  };
}

export function saveToDo(value, index) {
  return {
    type: SAVE_TO_DO,
    value,
    index,
  };
}

export function deleteToDo(index) {
  return {
    type: DELETE_TO_DO,
    index,
  };
}
