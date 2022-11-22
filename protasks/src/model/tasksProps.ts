import { task } from "./task";

export interface TaskItemProps {
    task: task;
    editTask: (id: number) => void;
    handleConfirmModal: (id: number) => void;
  }
  