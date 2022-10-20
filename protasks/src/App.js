import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import api from "./api/taks";
import { Button, Modal } from "react-bootstrap"

function App() {
  const [ShowTaskModal, setShowTaskModal] = useState(false);

  const handleTaskModal = () => setShowTaskModal(!ShowTaskModal);

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ id: 0 });

  const GetAllTasks = async () => {
    const response = await api.get('task/All');
    return response.data;
  }

const newTask = () =>{
  setTask({ id: 0 });
  handleTaskModal();
}

  useEffect(() => {
    const getTasks = async () => {
      const allTasks = await GetAllTasks();
      if (allTasks) setTasks(allTasks);
    };
    getTasks();
  }, []);

  const addTask = async (task) => {
    handleTaskModal();
    const response = await api.post("task", task);
    setTasks([...tasks, response.data]);
  }

  const deleteTask = async (id) => {
    if (await api.delete(`task/${id}`)) {
      const filterTasks = tasks.filter(task => task.id !== id);
      setTasks([...filterTasks]);
    }
  };

  const cancelTask = () => {
    setTask({ id: 0 });
    handleTaskModal();
  };

  const editTask = (id) => {
    const task = tasks.filter(task => task.id === id);
    setTask(task[0]);
    handleTaskModal();
  };
  const updateTask = async (task) => {
    handleTaskModal();
    const response = await api.put(`task/${task.id}`, task);

    const { id } = response.data;

    setTasks(tasks.map((item) => item.id === id ? task : item));
    setTask({ id: 0 })
  };



  return (
    <>
      <div className="d-flex justify-content-between align-items-end mt-2 pb-3 border-bottom border-2">

        <h1 className="m-0 p-0">
          Tasks {task.id !== 0 ? task.id : ""}
        </h1>
        <Button variant="outline-secondary" onClick={newTask}>
          <i className="fas fa-plus"></i>
        </Button>
      </div>

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask} />


      <Modal show={ShowTaskModal} onHide={handleTaskModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TaskForm
            addTask={addTask}
            updateTask={updateTask}
            cancelTask={cancelTask}
            selectedTask={task}
            tasks={tasks} />
        </Modal.Body>
      </Modal>

    </>
  );
}

export default App;
