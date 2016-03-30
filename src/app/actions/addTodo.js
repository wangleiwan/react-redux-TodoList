import { ADD_TO_DO } from '../constants/ActionTypes';

export function addToDo(value) {
  return {
    type: ADD_TO_DO,
    value,
  };
}
