import { useDispatch, useSelector } from "react-redux";
import { fetchIncome } from "../actions";
import { useEffect } from "react";
export const Income = () => {
    const dispatch = useDispatch();
    const income = useSelector((state) => state.income);
    const totalIncome = income.reduce((acc, value) => acc + value.amount, 0);
    useEffect(() => {
        dispatch(fetchIncome);
    }, [dispatch]);

    return (
        <div>
            <h1>Income Page</h1>
            <ul>
                {income.map((transaction, index) => (
                    <li key={index}>
                        {transaction.description}: ${transaction.amount}
                    </li>
                ))}
            </ul>
            <h2>Summary</h2>
            <div>Total Income : ${totalIncome}</div>
        </div>
    );
};