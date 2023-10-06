const initalState = { todos: [] };

export const todosReducer = (state = initalState, action) => {
  switch (action.type) {
    case "todos/added": {
      return { ...state, todos: [...state.todos, action.payload] }; //payload will be text
    }

    case "todos/removed": {
      return {
        ...state,
        todos: [
          ...state.todos,
          state.todos.filter((_, index) => index !== action.payload) //payload will be index
        ]
      };
    }
    default: {
      return state;
    }
  }
};
