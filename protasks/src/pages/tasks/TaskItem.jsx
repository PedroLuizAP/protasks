import React from 'react'

export default function TaskItem(props) {

  function priorityLabel(param) {
    switch (param) {
      case "Low":
      case "Normal":
      case "High":
        return param;

      default:
        return "Not definied";
    }
  }

  function priorityStyle(param, icon) {
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
    <div key={props.task.id} className={"card mb-2 shadow-sm border-" + priorityStyle(props.task.priority, false)}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge bg-secondary me-1">
              {props.task.id}
            </span>
            - {props.task.title}
          </h5>
          <h6>
            priority:
            <span className={"ms-1 text-" + priorityStyle(props.task.priority, false)}>
              <i className={"me-1 far fa-" + priorityStyle(props.task.priority, true)} />
              {priorityLabel(props.task.priority)}
            </span>
          </h6>
        </div>
        <p key={props.task.id} className="card-text">
          {props.task.id}-{props.task.description}
        </p>

        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button className="btn btn-outline-primary me-2 btn-sm" onClick={() => props.editTask(props.task.id)}>
            <i className="fas fa-pen me-2" />
            edit
          </button>
          <button className="btn btn-outline-danger me-2 btn-sm" onClick={() => props.handleConfirmModal(props.task.id)}>
            <i className="fas fa-trash me-2" />
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

