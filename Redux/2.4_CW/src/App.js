import { IncomeExpenseForm } from "./components/IncomeExpenseForm";
import { FinanceSummary } from "./components/FinanceSummary";
import { Provider } from "react-redux";
import { store } from "./store";
export default function App() {
  return (
    <div>
      <Provider store={store}>
        <h3>Finance Management </h3>
        {/* <IncomeExpenseForm />
        <FinanceSummary /> */}
      </Provider>
    </div>
  );
}
