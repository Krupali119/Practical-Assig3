import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a task manager', completed: false },
      ],
      newTaskText: '',
    };
  }

  addTask = (taskText) => {
    const newTask = {
      id: Date.now(), 
      text: taskText,
      completed: false,
    };
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask],
    }));
  };

  toggleTaskCompletion = (taskId) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  deleteTask = (taskId) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== taskId),
    }));
  };

  handleInputChange = (e) => {
    this.setState({ newTaskText: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.newTaskText.trim()) {
      this.addTask(this.state.newTaskText);
      this.setState({ newTaskText: '' });
    }
  };

  render() {
    return (
      <div className="task-manager">
        <h1>Task Manager</h1>
        <TaskForm 
          taskText={this.state.newTaskText} 
          onInputChange={this.handleInputChange} 
          onSubmit={this.handleFormSubmit} 
        />
        <TaskList 
          tasks={this.state.tasks} 
          toggleTaskCompletion={this.toggleTaskCompletion} 
          deleteTask={this.deleteTask} 
         />
      </div>
    );
  }
}

export default TaskManager;
