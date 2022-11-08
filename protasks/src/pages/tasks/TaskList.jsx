import React from 'react'
import TaskItem from "./TaskItem";


export default function TaskList(props) {
    return (
        <div className="mt-3">
            {props.tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    handleConfirmModal={props.handleConfirmModal}
                    editTask={props.editTask} />
            ))}
        </div>
    );
}
