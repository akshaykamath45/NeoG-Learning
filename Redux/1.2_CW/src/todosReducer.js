import { ADD_TODO, REMOVE_TODO } from "./actionCreators";
const initalState = { todos: [] };

export const todosReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return { ...state, todos: [...state.todos, action.payload] }; //payload will be text
    }

    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload) //payload will be index
      };
    }
    default: {
      return state;
    }
  }
};
