import { useSelector } from "react-redux";

export default function App() {
    let counter = useSelector((state) => state.count);

    return (
        <div>
            <h3>Counter : {counter}</h3>
            <button onClick={(e) => handleClick("add")}>+</button>
            <button onClick={(e) => handleClick("minus")}>-</button>
        </div>
    );
}
