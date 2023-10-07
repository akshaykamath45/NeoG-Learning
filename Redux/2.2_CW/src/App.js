import { IncomeExpenseForm } from "./components/IncomeExpenseForm";
import { FinanceSummary } from "./components/FinanceSummary";
import { Provider } from "react-redux";
import { store } from "./store";
export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h3>Finance Management </h3>
        <IncomeExpenseForm />
        <FinanceSummary />
      </div>
    </Provider>
  );
}

//Codesandbox : https://codesandbox.io/s/rx2-2-cw-rq5yfn