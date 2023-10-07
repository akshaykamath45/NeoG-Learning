import { useSelector } from "react-redux";

export default function App() {
  let counter = useSelector((state) => state.count);

  return <div>Counter : {counter}</div>;
}
