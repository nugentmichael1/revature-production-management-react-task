
//Task Managers
import TaskManager from "./TaskManager";
import ChatGPTTaskManager from "./ChatGPTTaskManager";

//CSS
import '../CSS/TaskManagersComparison.css'

function TaskManagersComparison() {
    return (
        <div className="TaskManagersComparison">
            <h1 className="title">Task Managers Comparison</h1>
            <h2>My Code</h2>
            <h2>ChatGPT's Code</h2>
            <TaskManager />
            <ChatGPTTaskManager />
        </div>
    )
}

export default TaskManagersComparison;