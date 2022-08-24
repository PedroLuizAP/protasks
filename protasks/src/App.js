import "./App.css";
import { useState } from "react";

let initialState = [
  {
    id: 1,
    description: "First Task",
  },
  {
    id: 2,
    description: "Second Task",
  },
];

function App() {
  const [tasks, setTasks] = useState(initialState);

  //const tasks = ;

  function addTask(e) {
    e.preventDefault();

    const task = {
      id: document.getElementById("id").value,
      description: document.getElementById("description").value,
    };

    setTasks([...tasks, { ...task }]);
  }
  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label for="inputId4" className="form-label">Id</label>
          <input id="id" type="text" placeholder="id" className="form-control" />
        </div>

        <div className="col-md-6">
          <label for="inputDescription4" className="form-label">Description</label>
          <input id="description" type="text" placeholder="description" className="form-control" />
        </div>

        <hr />
        <div className="col-12" >
          <button className="btn btn-outline-secondary" onClick={addTask}>+ Task</button>
        </div> 
      </form>

      <div className="mt-3">
          {tasks.map((task) => (
            <div key={task.id} className="card mb-2 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                <h5 className="card-title">
                  <span className="badge bg-secondary me-1">
                    {task.id}
                  </span>
                  - title
                </h5>
                <h6>
                  priority: 
                  <span className="ms-1 text-black">
                    <i className="me-1 far fa-smile"/>
                    regular
                  </span>
                </h6>                
                </div>              
                <p key={task.id} className="card-text">
                  {task.id}-{task.description}
                </p>

                <div className="d-flex justify-content-end pt-2 m-0 border-top">
                  <button className="btn btn-outline-primary me-2 btn-sm" >
                    <i className="fas fa-pen me-2"/>
                    edit
                  </button>
                  <button className="btn btn-outline-danger me-2 btn-sm" >
                  <i className="fas fa-trash me-2"/>
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
