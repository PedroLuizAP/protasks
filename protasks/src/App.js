import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import TaskForm from "./pages/tasks/TaskForm";
import TaskList from "./pages/tasks/TaskList";
import api from "./api/taks";
import { Button, Modal } from "react-bootstrap"

function App() {
  const [ShowTaskModal, setShowTaskModal] = useState(false);
  const [smShowConfirmModal, setSmShowConfirmModal] = useState(false);

  const handleTaskModal = () => setShowTaskModal(!ShowTaskModal);
  const handleConfirmModal = (id) => {
    if (id !== undefined && id !== 0) {
      const task = tasks.filter(task => task.id === id);
      setTask(task[0]);
    }
    else
    {
      setTask({ id: 0 });
    }
    setSmShowConfirmModal(!smShowConfirmModal);
  }

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ id: 0 });

  const GetAllTasks = async () => {
    const response = await api.get('task/All');
    return response.data;
  }

  const newTask = () => {
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
    handleConfirmModal(0);
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
        editTask={editTask}
        handleConfirmModal={handleConfirmModal} />


      <Modal show={ShowTaskModal} onHide={handleTaskModal}>
        <Modal.Header closeButton>
          <Modal.Title>Task {task.id > 0 ? - task.id : ""}</Modal.Title>
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

      <Modal show={smShowConfirmModal} onHide={handleConfirmModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you really want to delete the task - {task.id}?
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <button className="btn btn-outline-success me-2" onClick={() => deleteTask(task.id)}> Confirm{' '}
            <i className="fas fa-check me-2" />
          </button>
          <button className="btn btn-outline-danger me-2" onClick={() => handleConfirmModal(0)}> Cancel{" "}
            <i className="fas fa-times me-2" />
          </button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default App;
