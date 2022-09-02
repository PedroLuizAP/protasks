import "./App.css";
import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

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
  const [task, setTask] = useState(initialState);

  //const tasks = ;

  function addTask(e) {
    e.preventDefault();

    const task = {
      id: Math.max.apply(Math, tasks.map((t) => t.id)) + 1,
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

  function editTask(id) {
    const task = tasks.filter(task => task.id === id)
    setTask([task[0]]);
  }



  return (
    <>
      <TaskForm
        addTask={addTask}
        selectedTask={task} 
        tasks={tasks} />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask} />
    </>
  );
}

export default App;
