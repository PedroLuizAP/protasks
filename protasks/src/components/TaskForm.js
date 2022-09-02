import { useState } from 'react';

export default function TaskForm(props) {

    const [task, setTask] = useState({});
    const inputTextHandler = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    }

    return (
        <form className="row g-3">
            <div className="col-md-6">
                <label className="form-label">Title</label>
                <input id="title" type="text" placeholder="title" className="form-control" name="title" value={task.title} onChange={inputTextHandler} />
            </div>

            <div className="col-md-6">
                <label className="form-label">Priority</label>
                <select id="priority" className="form-select" name="priority" value={task.priority} onChange={inputTextHandler}>
                    <option defaultValue="0">Select...</option>
                    <option value="1">Low</option>
                    <option value="2">Normal</option>
                    <option value="3">High</option>
                </select>

            </div>

            <div className="col-md-12">
                <label className="form-label">Description</label>
                <textarea id="description" type="text" placeholder="description" className="form-control" name="description" value={task.description} onChange={inputTextHandler} />
            </div>

            <hr />
            <div className="col-12" >
                <button className="btn btn-outline-secondary" onClick={props.addTask}>+ Task</button>
            </div>
        </form>
    );
}
