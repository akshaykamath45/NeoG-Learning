import { useState } from "react";
export const IncomeExpenseForm = () => {
    const [amount, setAmount] = useState(0);
    return (
        <div>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button>Add Income</button>
            <button>Add Expense</button>
        </div>
    );
};
