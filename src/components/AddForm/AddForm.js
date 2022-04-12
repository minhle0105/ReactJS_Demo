export const AddForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={props.dataName} onChange={(e) => {
                props.setName(e.target.value);
            }}/>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" value={props.age} onChange={(e) => {
                props.setAge(e.target.value)
            }}/>
            <button type="submit">Save Ton</button>
        </form>
    )
}
