import React from 'react';

const TaskForm = ({ taskText, onInputChange, onSubmit }) => {
    return (
     <form onSubmit={onSubmit}>  
     <input 
        type="text" 
         value={taskText} 
        onChange={onInputChange}    
      placeholder="New task..." 
     />    
     
    <button type="submit">Add Task</button>
    </form>
 );
};

export default TaskForm;