//using icon as react component
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, toggle }) => {
    return (
        <div className={`task ${task.priority ? 'reminder' : ''}`} onDoubleClick={() => toggle(task._id, task.priority)}>
            <h3>{ task.task } <FaTimes style={{color: 'red', cursor: 'pointer'}} 
                    onClick={() => onDelete(task._id)}/></h3>
            <p>{task.date}</p>
            <p>{task.time}</p>
        </div>
    )
}

export default Task
