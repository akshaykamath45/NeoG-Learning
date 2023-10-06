const initalState = { todos: [] };

export const todosReducer = (state = initalState, action) => {
  switch (action.type) {
    case "todos/added": {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case "todos/removed": {
      return {
        ...state,
        todos: [
          ...state.todos,
          state.todos.filter((_, index) => index !== action.payload)
        ]
      };
    }
    default: {
      return state;
    }
  }
};
