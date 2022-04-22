import './App.css';
import {useState, useEffect} from "react";
import {AddForm} from "./components/AddForm/AddForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from "sweetalert2";

function App() {

    // html duoc return trong component luon phai co 1 html element outermost
    const [tonList, setTonList] = useState([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    // day 2: state / props

    // day 3: props
    // properties
    // doi voi the HTML binh thuong thi minh co thuoc tinh. vi du, <img src="" alt=""/>
    // object destructuring

    const title = "COUNTER APP"

    // useEffect --> 3 truong hop
    // 1. ko co dependency --> not recommended
    // 2. dependency empty
    // 3. co dependency

    // component lifecycle
    // mount (duoc tao ra va day len render ra giao dien) --> update (khi duoc cap nhat) --> unmount (chuyen qua phan khac hoac tat ung dung --> component
    // duoc go ra khoi giao dien)

    // ton tai suot vong doi cua component
    // luon o day de listen to any call --> execute
    useEffect(() => {
        showAlert();
    }, [tonList])

    const showAlert = () => {
        Swal.fire({
            icon: 'success',
            title: 'Thanh cong',
            showConfirmButton: false,
            timer: 1000
        }).then(r => {})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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

    const handleDelete = (i) => {
        const newTonList = [...tonList];
        newTonList.splice(i, 1);
        setTonList(newTonList);
    }

    return (
        <div className="App">
            <h1>{title}</h1>
            <AddForm dataName={name} setName={setName} age={age} setAge={setAge} handleSubmit={handleSubmit} />
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {tonList.map((ton, key) => {
                    return (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{ton.name}</td>
                            <td>{ton.age}</td>
                            <td><button onClick={(e) => {
                                e.preventDefault();
                                handleDelete(key);
                            }}>Delete</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default App;
