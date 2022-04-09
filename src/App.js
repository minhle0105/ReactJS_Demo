import './App.css';
import {useState} from "react";

function App() {

    // html duoc return trong component luon phai co 1 html element outermost
    const [tonList, setTonList] = useState([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    // day 2: state / props


    const title = "COUNTER APP"

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(age);
        const newTon = {
            id: parseInt(id),
            name: name,
            age: +age
        };
        const newTonList = [...tonList]
        newTonList.push(newTon);
        setTonList(newTonList);
        setId('')
        setName('')
        setAge('')
    }

    return (
        <div className="App">
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">Id</label>
                <input id="id" type="number" value={id} onChange={(e) => {
                    e.preventDefault();
                    setId(e.target.value);
                }}/>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={name} onChange={(e) => {
                    e.preventDefault()
                    setName(e.target.value);
                }}/>
                <label htmlFor="age">Age</label>
                <input id="age" type="number" value={age} onChange={(e) => {
                    e.preventDefault();
                    setAge(e.target.value)
                }}/>
                <button type="submit">Save Ton</button>
            </form>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                {tonList.map((ton, key) => {
                    return (
                        <tr key={key}>
                            <td>{ton.id}</td>
                            <td>{ton.name}</td>
                            <td>{ton.age}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default App;
