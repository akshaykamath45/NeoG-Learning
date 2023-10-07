import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export default function App() {
    let counter = useSelector((state) => state.count);
    const dispatch = useDispatch();
    const handleClick = (type) => {
        dispatch({ type });
    };
    return (
        <div>
            <h3>Counter : {counter}</h3>
            <button onClick={(e) => handleClick("add")}>+</button>
            <button onClick={(e) => handleClick("minus")}>-</button>
        </div>
    );
}


//Codesandbox : https://codesandbox.io/s/rx2-1-cw-wrlvsw