export const fetchIncome = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch("api/income");
    const data = await response.json();
    dispatch({ type: "FETCH_INCOME_SUCCESS", payload: data });
  } catch (error) {
    console.log("Error fetching income data: ", error);
    dispatch({ type: "FETCH_INCOME_FAILURE" });
  }
};
