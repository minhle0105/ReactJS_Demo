import './App.css';
import {useState} from "react";
import {TonTable} from "./TonTable";

function App() {

    // html duoc return trong component luon phai co 1 html element outermost

    // day 2: state / props
    const [number, setNumber] = useState(0);
    const [showTable, setShowTable] = useState(false);

    const handleDecrease = () => {
        setNumber(number - 1);
    }

    const handleIncrease = () => {
        setNumber(number + 1);
    }

    const handleToggle = () => {
        const newShowTable = !showTable;
        setShowTable(newShowTable);
    }

    const title = "COUNTER APP"

    return (
        <div className="App">
            <h1>{title}</h1>
            <button onClick={handleDecrease}>-</button>
            <h2>{number}</h2>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleToggle}>{showTable ? "Hide" : "Show"}</button>
            {showTable ? <TonTable /> : null}
        </div>
    );
}
export default App;
