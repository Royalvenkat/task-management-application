import React, { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, updatePriority }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [completedFilter, setCompletedFilter] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority =
      priorityFilter === "All" || task.priority === priorityFilter;
    const matchesCompleted =
      completedFilter === "All" ||
      task.completed.toString() === completedFilter;

    return matchesSearch && matchesPriority && matchesCompleted;
  });

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value="All">All Priorities</option>
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>
        <select
          value={completedFilter}
          onChange={(e) => setCompletedFilter(e.target.value)}
        >
          <option value="All">All Tasks</option>
          <option value="true">Completed</option>
          <option value="false">Not Completed</option>
        </select>
      </div>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updatePriority={updatePriority}
        />
      ))}
    </div>
  );
};

export default TaskList;
