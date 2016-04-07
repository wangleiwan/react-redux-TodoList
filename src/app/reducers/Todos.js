import { ADD_TO_DO } from '../constants/ActionTypes';
import { EDIT_TO_DO } from '../constants/ActionTypes';
import { SAVE_TO_DO } from '../constants/ActionTypes';
import { DELETE_TO_DO } from '../constants/ActionTypes';
import { CHANGE_COLOR } from '../constants/ActionTypes';

const initialState = {
  todos: [
    {
      todo: 'make a website',
      isComplete: false,
      isEditting: false,
      color: 'white',
    },
    {
      todo: 'do grocery shopping',
      isComplete: false,
      isEditting: false,
      color: 'white',
    },
  ],
};

const ToDos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_DO: {
      const newTodo = { todo: action.value, isComplete: false, isEditting: false, color: 'white' };
      const newTodos = [...state.todos, newTodo];
      return Object.assign({}, state, { todos: newTodos });
    }
    case EDIT_TO_DO: {
      const edittingTodo = { ...state.todos[action.index], isEditting: true };
      const newTodos = [
        ...state.todos.slice(0, action.index),
        edittingTodo,
        ...state.todos.slice(action.index + 1),
      ];
      return Object.assign({}, state, { todos: newTodos });
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
      return Object.assign({}, state, { todos: newTodos });
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
    default:
      return state;
  }
};

export default ToDos;
