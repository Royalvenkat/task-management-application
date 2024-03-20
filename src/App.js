import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updatePriority = (taskId, priority) => {
    setTasks(
      tasks.map((task) => (task.id === taskId ? { ...task, priority } : task))
    );
  };

  return (
    <div className="App">
      <h1>Task Manager App</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        updatePriority={updatePriority}
      />
    </div>
  );
};

export default App;
