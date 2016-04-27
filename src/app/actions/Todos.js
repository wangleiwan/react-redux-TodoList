import { ADD_TO_DO } from '../constants/ActionTypes';
import { EDIT_TO_DO } from '../constants/ActionTypes';
import { SAVE_TO_DO } from '../constants/ActionTypes';
import { DELETE_TO_DO } from '../constants/ActionTypes';
import { CHANGE_COLOR } from '../constants/ActionTypes';
import { COMPLETE_TO_DO } from '../constants/ActionTypes';
import { FILTER_VIEW } from '../constants/ActionTypes';
import { GET_INITIAL_TODOS } from '../constants/ActionTypes';
import localforage from 'localforage';

export function getInitialTodos() {
  return (dispatch) => {
    localforage.getItem('Todos').then((value) => {
      if (value === null) {
        dispatch({ type: GET_INITIAL_TODOS, value: [] });
      } else {
        dispatch({ type: GET_INITIAL_TODOS, value });
        console.log(value);
      }
    }).catch((err) => console.log(err));
  };
}

export function addToDo(value, index) {
  return {
    type: ADD_TO_DO,
    value,
    index,
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

export function completeToDo(value, index) {
  return {
    type: COMPLETE_TO_DO,
    value,
    index,
  };
}

export function changeColor(color, index) {
  return {
    type: CHANGE_COLOR,
    color,
    index,
  };
}

export function filterView(value) {
  return {
    type: FILTER_VIEW,
    value,
  };
}
