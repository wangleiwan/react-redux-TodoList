import { ADD_TO_DO } from '../constants/ActionTypes';

const initialState = {
  todos: [
    { todo: 'make a website', isComplete: false, isEditting: false },
    { todo: 'do grocery shopping', isComplete: false, isEditting: false },
  ],
};

const addToDo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_DO: {
      const newTodo = { todo: action.value, isComplete: false, isEditting: false };
      const newTodos = [...state.todos, newTodo];
      return Object.assign({}, state, { todos: newTodos });
    }
    default:
      return state;
  }
};

export default addToDo;
