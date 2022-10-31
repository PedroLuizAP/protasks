import React from 'react'
import Task from "./Task";


export default function TaskList(props) {
    return (
        <div className="mt-3">
            {props.tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    handleConfirmModal={props.handleConfirmModal}
                    editTask={props.editTask} />
            ))}
        </div>
    );
}
