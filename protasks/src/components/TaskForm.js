import { useState, useEffect } from 'react';

const initialTask = {
    id: 0,
    title: "",
    priority: 0,
    description: ""
}

export default function TaskForm(props) {

    const [task, setTask] = useState(thisTask());

    useEffect(() => {
        if (props.selectedTask.id !== 0)
            setTask(props.selectedTask);
    }, [props.selectedTask]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (props.selectedTask.id !== undefined && props.selectTask?.id !== 0)
            props.updateTask(task);
        else
            props.addTask(task);

        setTask(initialTask);
    }

    const inputTextHandler = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const cancelTask = (e) => {
        e.preventDefault();

        props.cancelTasks();

        setTask(initialTask);
    };

    function thisTask() {
        if (props.selectedTask.id !== 0)
            return props.selectedTask;
        else
            return initialTask;
    }

    return (
        <>
            <h1>
                Tasks {task.id !== 0 ? task.id : ""}
            </h1>
            <form className="row g-3" onSubmit={handleSubmit}>
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
                    <hr />

                </div>

                <div className="col-12 mt-0" >
                    {
                        task?.id === 0 ?
                            <button className="btn btn-outline-primary" type="submit">
                                <i className="fas fa-plus me-2"></i>
                                Task
                            </button>
                            :
                            <>
                                <button className="btn btn-outline-success me-2" type="submit">
                                    <i className="fas fa-floppy-disk me-2"></i>

                                    Save
                                </button>
                                <button className="btn btn-outline-danger" onClick={cancelTask}>
                                    <i className="fas fa-times me-2"></i>

                                    Cancel
                                </button>

                            </>
                    }
                </div>
            </form>
        </>
    );
}
