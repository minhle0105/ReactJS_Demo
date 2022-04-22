import {Button, Form} from "react-bootstrap";

export const AddForm = (props) => {
    return (
        <div>
            <h1>Add Form</h1>
            <Form onSubmit={props.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"  value={props.dataName} onChange={(e) => {
                        props.setName(e.target.value);
                    }}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number"  value={props.age} onChange={(e) => {
                        props.setAge(e.target.value)
                    }}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

    )
}
