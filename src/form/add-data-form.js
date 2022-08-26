import { useState } from "react";

const Input = (props) => {
    return (
        <div>
            <p>{props.label} <input value={props.value} onChange={event => props.setter(event.target.value)}/></p>
        </div>
    )
}

const AddDataForm = (props) => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');

    const submit = () => {
        if (id.trim() === '' || name.trim() === '') {

        }
        const newRow = {id, name};
        props.onSubmit(newRow);
    };

    return (
        <div>
            {/* <p>Id: <input value={id} onChange={event => setId(event.target.value)}/></p>
            <p>Name: <input value={name} onChange={event => setName(event.target.value)}/></p> */}
            <Input label="Id" value={id} setter={setId}/>
            <Input label="Name" value={name} setter={setName}/>
            <button onClick={submit}>Add Data</button>
        </div>
    );
};

export default AddDataForm;