import { ADD_AMOUNT, ADD_EXPENSE } from "./actions";

const initialState = {
  income: [],
  expense: [],
  savings: [],
  loading: false,
  error: null
};

export const financeReducers = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_INCOME_SUCCESS": {
      return { ...state, income: action.payload, loading: false, error: null };
    }
    case "FETCH_INCOME_FAILURE": {
      return { ...state, expense: action.payload, loading: false, error: null };
    }
    case "FETCH_DATA_LOADING": {
      return { ...state, loading: true };
    }
    default: {
      return state;
    }
  }
};
