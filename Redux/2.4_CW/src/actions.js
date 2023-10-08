export const ADD_AMOUNT = "finance/addAmount";
export const ADD_EXPENSE = "finance/addExpense";

export const addAmount = (amount) => ({
  type: ADD_AMOUNT,
  payload: amount
});

export const addExpense = (amount) => ({
  type: ADD_EXPENSE,
  payload: amount
});
