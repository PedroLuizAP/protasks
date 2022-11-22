import { useState } from "react";
import { useEffect } from "react";
import api from "../../api/taks";
import { Button, Modal } from "react-bootstrap";
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TitlePage from '../../components/TitlePage';
import { ITask, Priority } from './../../model/task';

const initialTask: ITask = {
  id: 0,
  title: "",
  priority: Priority.Notdefinied,
  description: ""
}

const Task = () => {
  const [ShowTaskModal, setShowTaskModal] = useState(false);
  const [smShowConfirmModal, setSmShowConfirmModal] = useState(false);

  const [tasks, setTasks] = useState<ITask[]>([]);
  const [task, setTask] = useState<ITask>(initialTask);

  const handleTaskModal = () => setShowTaskModal(!ShowTaskModal);

  const handleConfirmModal = (id?: number) => {
    if (id !== undefined && id !== 0) {
      const task = tasks.filter((task) => task.id === id);
      setTask(task[0]);
    } else {
      setTask(initialTask);
    }
    setSmShowConfirmModal(!smShowConfirmModal);
  };


  const GetAllTasks = async () => {
    const response = await api.get("task/All");
    return response.data;
  };

  const newTask = () => {
    setTask(initialTask);
    handleTaskModal();
  };

  useEffect(() => {
    const getTasks = async () => {
      const allTasks = await GetAllTasks();
      if (allTasks) setTasks(allTasks);
    };
    getTasks();
  }, []);

  const addTask = async (task: ITask) => {
    handleTaskModal();
    const response = await api.post("task", task);
    setTasks([...tasks, response.data]);
  };

  const deleteTask = async (id: number) => {
    if (await api.delete(`task/${id}`)) {
      const filterTasks = tasks.filter((task) => task.id !== id);
      setTasks([...filterTasks]);
    }
    handleConfirmModal(0);
  };

  const cancelTask = () => {
    setTask(initialTask);
    handleTaskModal();
  };

  const editTask = (id?: number) => {
    const task = tasks.filter((task) => task.id === id);
    setTask(task[0]);
    handleTaskModal();
  };
  const updateTask = async (task: ITask) => {
    handleTaskModal();
    const response = await api.put(`task/${task.id}`, task);

    const { id } = response.data;

    setTasks(tasks.map((item) => (item.id === id ? task : item)));
    setTask(initialTask);
  };

  return (
    <>
      <TitlePage title={"Tasks" + (task.id !== 0 ? task.id : "")}>
        <Button variant="outline-secondary" onClick={newTask}>
          <i className="fas fa-plus"></i>
        </Button>
      </TitlePage>

      <TaskList
        tasks={tasks}
        editTask={editTask}
        handleConfirmModal={handleConfirmModal}
      />

      <Modal show={ShowTaskModal} onHide={handleTaskModal}>
        <Modal.Header closeButton>
          <Modal.Title>Task {task.id > 0 ? -task.id : ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TaskForm
            addTask={addTask}
            updateTask={updateTask}
            cancelTask={cancelTask}
            selectedTask={task}
          />
        </Modal.Body>
      </Modal>

      <Modal show={smShowConfirmModal} onHide={() => handleConfirmModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you really want to delete the task - {task.id}?
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <button
            className="btn btn-outline-success me-2"
            onClick={() => deleteTask(task.id)}>
            {" "}
            Confirm <i className="fas fa-check me-2" />
          </button>
          <button
            className="btn btn-outline-danger me-2"
            onClick={() => handleConfirmModal(0)}>
            {" "}
            Cancel <i className="fas fa-times me-2" />
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Task;
