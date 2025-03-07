import React, { useState } from 'react'

//css
import '../CSS/TaskManager.css'

interface Task {
    id: number;
    text: string;
    completed: boolean;
};

const TaskManager: React.FC = () => {

    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, text: 'Walk Dog', completed: true },
        { id: 2, text: 'Wash Dishes', completed: false },
        { id: 3, text: 'Do Laundry', completed: false },
    ]);

    const [tasksFilter, setTasksFilter] = useState<string>('All Tasks');

    const [newTaskText, setNewTaskText] = useState<string>("");

    const addTask = (): void => {
        //Guard: Empty Task Text
        if (newTaskText.trim() === "") return;

        setTasks([...tasks,
        { id: Date.now(), text: newTaskText, completed: false }]
        );
        setNewTaskText("");
    }

    function updateTaskCompletion(id: number): void {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task)
        )
    }

    const editTask = (id: number): void => {
        const newText = prompt('Edit Task', tasks.find((task) => task.id === id)?.text || "");
        if (newText !== null && newText.trim() !== "") {
            setTasks(tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)));
        }
    }

    const removeTask = (id: number): void => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const filterTasks = (): Task[] => {
        switch (tasksFilter) {
            case 'All Tasks':
                return tasks;
            case 'Active Tasks':
                return tasks.filter((task) => !task.completed);
            case 'Completed Tasks':
                return tasks.filter((task) => task.completed);
            default:
                return tasks;
        }
    }

    return (
        <div className="TaskManager">
            <h1>Task Manager</h1>
            <input type='text'
                placeholder='New Task'
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
            />
            <button className='add-task-mine' onClick={addTask}>
                Add Task
            </button>
            <div className='task-filters-mine'>
                <button
                    onClick={() => setTasksFilter("All Tasks")}>
                    All Tasks
                </button>
                <button
                    onClick={() => setTasksFilter("Active Tasks")}>
                    Active Tasks
                </button>
                <button
                    onClick={() => setTasksFilter("Completed Tasks")}>
                    Completed Tasks
                </button>
            </div>
            <ul className='task-list-mine'>
                {filterTasks().map((task) => (
                    <li key={task.id}
                        className={task.completed ? 'completed' : ''}>
                        <input type='checkbox'
                            checked={task.completed}
                            onChange={() => updateTaskCompletion(task.id)} />
                        <span>{task.text}</span>
                        <button className='edit-mine'
                            onClick={() => editTask(task.id)}>
                            Edit
                        </button>
                        <button
                            className='remove-mine'
                            onClick={() => removeTask(task.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;