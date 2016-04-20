import { ADD_TO_DO } from '../constants/ActionTypes';
import { EDIT_TO_DO } from '../constants/ActionTypes';
import { SAVE_TO_DO } from '../constants/ActionTypes';
import { DELETE_TO_DO } from '../constants/ActionTypes';
import { COMPLETE_TO_DO } from '../constants/ActionTypes';

const initialState = {
  todos: [
    { todo: 'make a website', isComplete: false, isEditting: false },
    { todo: 'do grocery shopping', isComplete: false, isEditting: false },
  ],
};

const ToDos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_DO: {
      const newTodo = { todo: action.value, isComplete: false, isEditting: false };
      const newTodos = [...state.todos, newTodo];
      return Object.assign({}, state, { todos: newTodos });
    }
    case EDIT_TO_DO: {
      const edittingTodo = { todo: action.value, isComplete: false, isEditting: true };
      const newTodos = [
        ...state.todos.slice(0, action.index),
        edittingTodo,
        ...state.todos.slice(action.index + 1),
      ];
      return Object.assign({}, state, { todos: newTodos });
    }
    case SAVE_TO_DO: {
      const newTodo = { todo: action.value, isComplete: false, isEditting: false };
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
    case COMPLETE_TO_DO: {
      const newTodo = { todo: action.value, isComplete: true, isEditting: false };
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
