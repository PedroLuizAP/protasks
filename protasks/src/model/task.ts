export interface task {
    id: number;
    priority: string;
    title: string;
    description: string;
}

export interface TaskListProps {
    tasks: task[];
    editTask: (id: number) => void;
    handleConfirmModal: (id: number) => void;
}