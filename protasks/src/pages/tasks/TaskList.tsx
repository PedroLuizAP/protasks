import React from 'react'
import TaskItem from "./TaskItem";
import { TaskListProps } from './../../model/tasksProps';

const TaskList: React.FC<TaskListProps> = ({ tasks, editTask, handleConfirmModal }: TaskListProps) => {
    return (
        <div className="mt-3">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    handleConfirmModal={handleConfirmModal}
                    editTask={editTask} />
            ))}
        </div>
    );
}

export default TaskList;