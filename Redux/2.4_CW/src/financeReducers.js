import { ADD_AMOUNT, ADD_EXPENSE } from "./actions";

const initialState = {
  income: 0,
  expense: 0
};

export const financeReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AMOUNT: {
      return { ...state, income: state.income + action.payload };
    }
    case ADD_EXPENSE: {
      return { ...state, expense: state.expense + action.payload };
    }
    default: {
      return state;
    }
  }
};
