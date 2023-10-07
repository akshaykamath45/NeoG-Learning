import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAmount, addExpense } from "../actions";
export const IncomeExpenseForm = () => {
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch();
    const handleAddIncome = () => {
        dispatch(addAmount(parseFloat(amount)));
        setAmount(0);
    };
    const handleAddExpense = () => {
        dispatch(addExpense(parseFloat(amount)));
        setAmount(0);
    };
    return (
        <div>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleAddIncome}>Add Income</button>
            <button onClick={handleAddExpense}>Add Expense</button>
        </div>
    );
};
