
//Task Managers
import TaskManager from "./TaskManager";
import ChatGPTTaskManager from "./ChatGPTTaskManager";

//CSS
import '../CSS/TaskManagersComparison.css'

function TaskManagersComparison() {
    return (
        <div className="TaskManagersComparison">
            {/* <h1>Task Managers Comparison</h1> */}
            <TaskManager />
            <ChatGPTTaskManager />
        </div>
    )
}

export default TaskManagersComparison;