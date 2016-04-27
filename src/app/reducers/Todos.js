import { ADD_TO_DO } from '../constants/ActionTypes';
import { EDIT_TO_DO } from '../constants/ActionTypes';
import { SAVE_TO_DO } from '../constants/ActionTypes';
import { DELETE_TO_DO } from '../constants/ActionTypes';
import { COMPLETE_TO_DO } from '../constants/ActionTypes';
import { CHANGE_COLOR } from '../constants/ActionTypes';
import { FILTER_VIEW } from '../constants/ActionTypes';
import { GET_INITIAL_TODOS } from '../constants/ActionTypes';
import localforage from 'localforage';

import { colors } from '../constants/colors';

const initialState = {};

const ToDos = (state = initialState, action) => {
  localforage.setItem('Todos', state);
  switch (action.type) {
    case GET_INITIAL_TODOS: {
      let newState;
      if (Array.isArray(action.value)) {
        newState = Object.assign({}, state, { todos: action.value, filter: 'all' });
      } else {
        newState = Object.assign({}, state, action.value);
      }
      localforage.setItem('Todos', newState);
      return newState;
    }
    case ADD_TO_DO: {
      const color = colors[action.index];
      const newTodo = { todo: action.value, isComplete: false, isEditting: false, color };
      let newTodos = [];
      if (Object.keys(state).length === 0) {
        newTodos = [newTodo];
      } else {
        newTodos = [...state.todos, newTodo];
      }
      const newState = Object.assign({}, state, { todos: newTodos });
      localforage.setItem('Todos', newState);
      return newState;
    }
    case EDIT_TO_DO: {
      const edittingTodo = { ...state.todos[action.index], isEditting: true };
      const newTodos = [
        ...state.todos.slice(0, action.index),
        edittingTodo,
        ...state.todos.slice(action.index + 1),
      ];
      const newState = Object.assign({}, state, { todos: newTodos });
      // localforage.setItem('Todos', newState);
      return newState;
    }
    case SAVE_TO_DO: {
      const newTodo = { ...state.todos[action.index], todo: action.value, isEditting: false };
      const newTodos = [
        ...state.todos.slice(0, action.index),
        newTodo,
        ...state.todos.slice(action.index + 1),
      ];
      return Object.assign({}, state, { todos: newTodos });
    }
    case DELETE_TO_DO: {
      const newTodos = [
        ...state.todos.slice(0, action.index),
        ...state.todos.slice(action.index + 1),
      ];
      const newState = Object.assign({}, state, { todos: newTodos });
      localforage.setItem('Todos', newState);
      return newState;
    }
    case COMPLETE_TO_DO: {
      const newTodo = { ...state.todos[action.index],
        isComplete: !state.todos[action.index].isComplete };
      const newTodos = [
        ...state.todos.slice(0, action.index),
        newTodo,
        ...state.todos.slice(action.index + 1),
      ];
      const newState = Object.assign({}, state, { todos: newTodos });
      localforage.setItem('Todos', newState);
      return newState;
    }
    case CHANGE_COLOR: {
      const newTodo = { ...state.todos[action.index], color: action.color };
      const newTodos = [
        ...state.todos.slice(0, action.index),
        newTodo,
        ...state.todos.slice(action.index + 1),
      ];
      return Object.assign({}, state, { todos: newTodos });
    }
    case FILTER_VIEW: {
      const value = action.value;
      let newFilter;
      if (value === 1) {
        newFilter = 'all';
      } else if (value === 2) {
        newFilter = 'completed';
      } else {
        newFilter = 'active';
      }
      const newState = Object.assign({}, state, { filter: newFilter });
      localforage.setItem('Todos', newState);
      return newState;
    }
    default:
      return state;
  }
};

export default ToDos;
