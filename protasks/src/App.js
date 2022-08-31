import "./App.css";
import { useState } from "react";

let initialState = [
  {
    id: 1,
    description: "First Task",
    priority: "1",
    title: "First Title",
  },
  {
    id: 2,
    description: "Second Task",
    title: "Second Title",
    priority: "2",
  },
  {
    id: 3,
    description: "Third Task",
    title: "Third Title",
    priority: "3",
  },
];

function App() {
  const [tasks, setTasks] = useState(initialState);

  //const tasks = ;

  function addTask(e) {
    e.preventDefault();

    const task = {
      id: document.getElementById("id").value,
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      priority: document.getElementById("priority").value,
    };

    setTasks([...tasks, { ...task }]);


  }

  function deleteTask(id) {
    const filterTasks = tasks.filter(task => task.id !== id)
    setTasks([...filterTasks]);
  }

  function priorityLabel(param) {
    switch (param) {
      case "1":
        return "Low";

      case "2":
        return "Normal";

      case "3":
        return "High";

      default:
        return "Not definied";
    }
  }

  function priorityStyle(param, icon) {
    switch (param) {

      case "1":
        return icon ? "smile" : "success";

      case "2":
        return icon ? "meh" : "warning";

      case "3":
        return icon ? "frown" : "danger";

      default:
        return icon ? "circle" : "";
    }
  }

  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Id</label>
          <input id="id" type="text" placeholder="id" className="form-control" readOnly value={Math.max.apply(Math, tasks.map(t => t.id)) + 1} />
        </div>

        <div className="col-md-6">
          <label className="form-label">Priority</label>
          <select id="priority" className="form-select">
            <option defaultValue="0">Select...</option>
            <option value="1">Low</option>
            <option value="2">Normal</option>
            <option value="3">High</option>
          </select>

        </div>

        <div className="col-md-6">
          <label className="form-label">Title</label>
          <input id="title" type="text" placeholder="description" className="form-control" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Description</label>
          <input id="description" type="text" placeholder="description" className="form-control" />
        </div>

        <hr />
        <div className="col-12" >
          <button className="btn btn-outline-secondary" onClick={addTask}>+ Task</button>
        </div>
      </form>

      <div className="mt-3">
        {tasks.map((task) => (
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
                <button className="btn btn-outline-primary me-2 btn-sm" >
                  <i className="fas fa-pen me-2" />
                  edit
                </button>
                <button className="btn btn-outline-danger me-2 btn-sm" onClick={() => deleteTask(task.id)}>
                  <i className="fas fa-trash me-2" />
                  delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
