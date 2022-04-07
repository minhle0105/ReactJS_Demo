import './App.css';
import {TonTable} from "./TonTable";
function App() {

    // html duoc return trong component luon phai co 1 html element outermost

    const title = "TEN NHA TON"

    return (
        <div className="App">
            <h1>{title}</h1>
            <label htmlFor="name">Name</label>
            <input id="name" type="text"/>
            <TonTable />
        </div>
    );
}
export default App;
