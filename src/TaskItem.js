import React from 'react';

const TaskItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <div className="task-item">
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleTaskCompletion(task.id)} 
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
