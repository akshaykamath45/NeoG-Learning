const initalState = { count: 0 };
export const counterReducer = (state = initalState, action) => {
  switch (action.type) {
    case "add": {
      return { ...state, count: state.count + 1 };
    }
    case "minus": {
      return { ...state, count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
};
