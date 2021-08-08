import Header from './components/Header';
import React, { useEffect, useState } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTasks';



const App = () => {
  
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTask] = useState([])


  //fetching data from mongo db
  const fetchData = () => {
    return fetch("/data")
          .then((response) => response.json())
          .then((data) => setTask(data));}

  useEffect(() => {
    fetchData();
  }, []);




//Add Tasks
const addTasks = (task) => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    };
    fetch('/data', requestOptions)
        .then(response => response.json())
        .then(data => console.log('chala gaya'));
    
    fetchData();
}



//Delete Task
const DeleteTask = (id) => {
  fetch(`/data/${id}`, { method: 'DELETE' })
        .then(() => console.log('Deleted'));

  fetchData();
}


//Toggle Reminder
const togglePriority = (id, current_priority) => {
  const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priority: !current_priority})
  };
  fetch(`/data/${id}`, requestOptions)
    .then(response => response.json())
    .then(data => console.log('Hogaya Update'))
  
  fetchData();
}



  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTasks}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={DeleteTask} toggle={togglePriority}/> : 'No Tasks to Show'}
      
    </div>
  );
}
export default App;

