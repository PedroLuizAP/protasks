import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [index, setIndex] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({id:0});

  useEffect(() => {
    tasks.length <= 0 ? setIndex(1) : setIndex(Math.max.apply(Math, tasks.map((t) => t.id)) + 1)
  }, [tasks]);

  function addTask(task) {
    setTasks([...tasks, { ...task, id: index }]);
  };

  function deleteTask(id) {
    const filterTasks = tasks.filter(task => task.id !== id)
    setTasks([...filterTasks]);
  };

  function cancelTask() {
    setTask({ id: 0 });
  };

  function editTask(id) {
    const task = tasks.filter(task => task.id === id);

    setTask(task[0]);
  };
  function updateTask(task) {
    setTasks(tasks.map(item => item.id === task.id ? task : item));
    setTask({ id: 0 })
  };



  return (
    <>
      <TaskForm
        addTask={addTask}
        updateTask={updateTask}
        cancelTask={cancelTask}
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
