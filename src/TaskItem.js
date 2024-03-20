import React from "react";

const TaskItem = ({ task, deleteTask, updatePriority }) => {
  const handlePriorityChange = (e) => {
    updatePriority(task.id, e.target.value);
  };

  return (
    <div key={task.id} className="task-item">
      <div>Title: {task.title}</div>
      <div>Description: {task.description}</div>
      <div>Due Date: {task.dueDate}</div>
      <div>
        Priority:
        <select value={task.priority} onChange={handlePriorityChange}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
