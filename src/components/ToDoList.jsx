import { useState, useEffect } from "react";
import axios from "axios";  // Importar o Axios
import styles from "./ToDoList.module.css";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  useEffect(() => {
    getTasks();
  }, []);

  function getTasks() {
    axios.get("http://localhost:5000/tasks")  // Substituir fetch por axios.get
      .then((response) => {
        setTasks(response.data);
        console.log(response)
        console.log('Here are the tasks:', response.data);
      })
      .catch((error) => console.log(error));
  }

  function addTask() {
    if (newTask.trim() !== "") {
      const nextId = tasks.length;
      const taskToAdd = { title: newTask, id: String(nextId) };

      axios.post("http://localhost:5000/tasks", taskToAdd)  // Substituir fetch por axios.post
        .then((response) => {
          setTasks([...tasks, response.data]);
          setNewTask("");
        })
        .catch((error) => console.log(error));
    }
  }

  
  function deleteTask(id) {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then((response) => {
        console.log('Task deleted successfully:', response.data);
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.error('There was a problem deleting the task:', error);
      });
  }
  
  
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTasks(updatedTask);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTasks(updatedTask);
    }
  }

  return (
    <div className={styles.to_do_list}>
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className={styles.add_button} onClick={addTask}>
          Add Task
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className={styles.text}>{task.title}</span>
            <button
              className={styles.delete_button}
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
            <button
              className={styles.move_button}
              onClick={() => moveTaskUp(index)}
            >
              Up
            </button>
            <button
              className={styles.move_button}
              onClick={() => moveTaskDown(index)}
            >
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
