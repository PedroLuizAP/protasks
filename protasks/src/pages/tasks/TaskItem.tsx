import React from 'react'
import { TaskItemProps } from '../../model/tasksProps';

const TaskItem: React.FC<TaskItemProps> = ({ task, editTask, handleConfirmModal }: TaskItemProps) => {

  function priorityLabel(param: string) {
    switch (param) {
      case "Low":
      case "Normal":
      case "High":
        return param;

      default:
        return "Not definied";
    }
  }

  function priorityStyle(param: string, icon: boolean) {
    switch (param) {

      case "Low":
        return icon ? "smile" : "success";

      case "Normal":
        return icon ? "meh" : "warning";

      case "High":
        return icon ? "frown" : "danger";

      default:
        return icon ? "circle" : "";
    }
  }

  return (
    <div key={task.id} className={"card mb-2 shadow-sm border-" + priorityStyle(task.priority, false)}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge bg-secondary me-1">
              {task.id}
            </span>
            - {task.title}
          </h5>
          <h6>
            priority:
            <span className={"ms-1 text-" + priorityStyle(task.priority, false)}>
              <i className={"me-1 far fa-" + priorityStyle(task.priority, true)} />
              {priorityLabel(task.priority)}
            </span>
          </h6>
        </div>
        <p key={task.id} className="card-text">
          {task.id}-{task.description}
        </p>

        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button className="btn btn-outline-primary me-2 btn-sm" onClick={() => editTask(task.id)}>
            <i className="fas fa-pen me-2" />
            edit
          </button>
          <button className="btn btn-outline-danger me-2 btn-sm" onClick={() => handleConfirmModal(task.id)}>
            <i className="fas fa-trash me-2" />
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;

