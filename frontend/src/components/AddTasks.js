import { useState } from 'react';

const AddTasks = ({ onAdd, clearBit }) => {

    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [priority, setPriority] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add task')
            return
        }
        
        onAdd({task: text, date: date, time: time, priority: priority});

        setText('');
        setDate('');
        setTime('');
        setPriority(false);
    }


    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e) => 
                    setText(e.target.value)
                } onClick={clearBit}></input>
            </div>

            <div className='form-control'>
                <label>Date</label>
                <input type='date' placeholder='Date'value={date} onChange={(e) => 
                    setDate(e.target.value)
                }></input>
            </div>


            <div className='form-control'>
                <label>Time</label>
                <input type='time' placeholder='time'value={time} onChange={(e) => 
                    setTime(e.target.value)
                }></input>
            </div>


            <div className='form-control form-control-check'>
                <label>Priority</label>
                <input type='checkbox' checked={priority} placeholder='Set Priority' value={priority} onChange={(e) => 
                    setPriority(e.target.checked)
                }></input>
            </div>


            <input type='submit' value='Save Task' className='btn-green btn-block'></input>
        </form>
        
    )
}

export default AddTasks
