import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import api from "./api/taks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ id: 0 });

  const GetAllTasks = async () => {
    const response = await api.get('task/All');
    return response.data;
  }


  useEffect(() => {
    const getTasks = async () => {
      const allTasks = await GetAllTasks();
      if (allTasks) setTasks(allTasks);
    };
    getTasks();
  }, []);

  const addTask = async (task) => {
    const response = await api.post("task", task);
    setTasks([...tasks, response.data]);
  }

  const deleteTask = async (id) => {
    if (await api.delete(`task/${id}`)) {
      const filterTasks = tasks.filter(task => task.id !== id)
      setTasks([...filterTasks]);
    }
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
