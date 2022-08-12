import './App.css';
import {useState} from 'react';

let initialState =[
  {
    id: 1,
    description: "First Task",
  },
  {
    id: 2,
    description: "Second Task",
  }

];

function App() {

  const [tasks, setTasks] = useState(initialState)

  //const tasks = ;

  function addTask(e){
    e.preventDefault();

    const task = {
      id: document.getElementById('id').value,
      description: document.getElementById('description').value
    }

    setTasks([...tasks, {...task}]);
  }
  return (
    <>
      <form>
        <input id="id" type="text" placeholder="id"/>
        <input id="description" type="text" placeholder="description"/>
        <button onClick={addTask}>+ Task</button>
      </form>
      <div className="mt-3">
        <ul className="list-group">
          {tasks.map(task => (
            <li key={task.id} className="list-group-item">{task.id}-{task.description}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
