import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium", // Default priority
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim()) {
      addTask({ ...task, id: Date.now().toString() });
      setTask({
        title: "",
        description: "",
        dueDate: "",
        priority: "Medium",
      });
    }
  };

  return (
    <div className="task-form">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
        ></textarea>
        <label>Due Date:</label>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
        />
        <label>Priority:</label>
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
