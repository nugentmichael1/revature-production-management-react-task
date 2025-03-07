import React, { useState } from "react";

//CSS
import '../CSS/ChatGPTTaskManager.css'

// Define the Task type
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Task1", completed: false },
    { id: 2, text: "Task2", completed: false },
  ]);

  const [newTask, setNewTask] = useState<string>("");

  const addTask = (): void => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (id: number): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id: number): void => {
    const newText = prompt("Edit Task", tasks.find((task) => task.id === id)?.text || "");
    if (newText !== null && newText.trim() !== "") {
      setTasks(tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)));
    }
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <input
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="add-task" onClick={addTask}>
        ADD TASK
      </button>

      <div className="filter-buttons">
        <button>ALL TASKS</button>
        <button>ACTIVE TASKS</button>
        <button>COMPLETED TASKS</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span>{task.text}</span>
            <button className="edit" onClick={() => editTask(task.id)}>
              EDIT
            </button>
            <button className="remove" onClick={() => removeTask(task.id)}>
              REMOVE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
