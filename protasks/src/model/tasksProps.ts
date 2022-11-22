import { ITask } from "./task";

export interface TaskItemProps {
    task: ITask;
    editTask: (id: number) => void;
    handleConfirmModal: (id: number) => void;
};

export interface TaskFormProps {
    selectedTask: ITask;
    updateTask: (task: ITask) => void;
    addTask: (task: ITask) => void;
    cancelTask: () => void;
};

export interface TaskListProps {
    tasks: ITask[];
    editTask: (id: number) => void;
    handleConfirmModal: (id: number) => void;
};