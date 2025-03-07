
//css
import '../CSS/TaskManager.css'

function TaskManager() {
    return (
        <div className="TaskManager">
            <h1>Task Manager</h1>
            <input type='text' placeholder='New Task' />
            <button className='add-task-mine'>Add Task</button>
            <div className='task-filters-mine'>
                <button>All Tasks</button>
                <button>Active Tasks</button>
                <button>Completed Tasks</button>
            </div>
            <ul className='task-list-mine'>
                <li>
                    <input type='checkbox' />
                    <span>Task 1</span>
                    <button>Edit</button>
                    <button>Delete</button>
                </li>
                <li>
                    <input type='checkbox' />
                    <span>Task 2</span>
                    <button>Edit</button>
                    <button>Delete</button>
                </li>
            </ul>
        </div>
    )
}

export default TaskManager