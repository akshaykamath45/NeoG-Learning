import { useSelector } from "react-redux";

export const FinanceSummary = () => {
    const income = useSelector((state) => state.income);
    const expenses = useSelector((state) => state.expense);
    return (
        <div>
            <h2>Finance Summary</h2>
            <p>Income: ${income}rs</p>
            <p>Expenses: ${expenses}rs</p>
            <p>Balance: ${income - expenses}rs</p>
        </div>
    );
};