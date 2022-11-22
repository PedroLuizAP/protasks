import { useState, useEffect } from 'react';
import { TaskFormProps } from '../../model/tasksProps';
import { ITask, Priority } from './../../model/task';

const initialTask: ITask = {
    id: 0,
    title: "",
    priority: Priority.Notdefinied,
    description: ""
}

const TaskForm: React.FC<TaskFormProps> = ({ selectedTask, updateTask, addTask, cancelTask }: TaskFormProps) => {
    const [task, setTask] = useState<ITask>(thisTask());

    useEffect(() => {
        if (selectedTask.id !== 0)
            setTask(selectedTask);
    }, [selectedTask]);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (selectedTask?.id !== 0)
            updateTask(task);
        else
            addTask(task);

        setTask(initialTask);
    }

    const handleValue = (e: any) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleCancelTask = (e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        cancelTask();

        setTask(initialTask);
    };

    function thisTask():ITask {
        if (selectedTask.id !== 0)
            return selectedTask;
        else
            return initialTask;
    }

    return (
        <>

            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label className="form-label">Title</label>
                    <input id="title" type="text" placeholder="title" className="form-control" name="title" value={task.title} onChange={handleValue} />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Priority</label>
                    <select id="priority" className="form-select" name="priority" value={task.priority} onChange={handleValue}>
                        <option defaultValue="Not definied">Select...</option>
                        <option value="Low">Low</option>
                        <option value="Normal">Normal</option>
                        <option value="High">High</option>
                    </select>

                </div>



                <div className="col-md-12">
                    <label className="form-label">Description</label>
                    <textarea id="description" placeholder="description" className="form-control" name="description" value={task.description} onChange={handleValue} />
                    <hr />

                </div>

                <div className="col-12 mt-0" >
                    {
                        task?.id === 0 ? (
                            <button className="btn btn-outline-success" type="submit">
                                <i className="fas fa-plus me-2"></i>
                                Save
                            </button>)
                            :
                            (<>
                                <button className="btn btn-outline-success me-2" type="submit">
                                    <i className="fas fa-floppy-disk me-2"></i>

                                    Save
                                </button>
                                <button className="btn btn-outline-danger" onClick={handleCancelTask}>
                                    <i className="fas fa-times me-2"></i>

                                    Cancel
                                </button>

                            </>)
                    }
                </div>
            </form>
        </>
    );
}

export default TaskForm;