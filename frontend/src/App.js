import Header from './components/Header';
import { useState } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTasks';


const App = () => {


  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTask] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: '3rd August Tuesday 12:00',
      reminder: true
    },

    {
      id: 2,
      text: 'Music Class',
      day: '3rd August Tuesday 15:00',
      reminder: true
    }
  ])

//Add Tasks
const addTasks = (task) => {
  const id = Math.floor(Math.random() * 10000 + 1);
  const newTask = {id, ...task}
  setTask([...tasks, newTask])
}


//Delete Task
const DeleteTask = (id) => {
  setTask(tasks.filter((task) =>
    task.id !== id
  ))
}


//Toggle Reminder
const toggleReminder = (id) => {
  setTask(
    tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder}:
      task
    )
  )
}
  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTasks}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={DeleteTask} 
      toggle={toggleReminder}/> : 'No Tasks to Show'}
    </div>
  );
}
export default App;
