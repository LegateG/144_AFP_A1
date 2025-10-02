import { useState } from 'react';
import styles from '../styles/Home.module.css';

// Component 1: TaskForm - Handles task creation
export default function TaskForm({ onAddTask }) {
  const [taskInput, setTaskInput] = useState('');
  const [priority, setPriority] = useState('medium');

  // Event Handler 1: Button click for adding tasks
  const handleAddTask = () => {
    if (taskInput.trim()) {
      onAddTask({
        id: Date.now(),
        text: taskInput,
        priority: priority,
        completed: false
      });
      setTaskInput(''); // Clear input after submission
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className={styles.taskForm}>
      <h2>Add New Task</h2>
      <div className={styles.formContainer}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a task..."
          className={styles.taskInput}
        />
        <select 
          value={priority} 
          onChange={(e) => setPriority(e.target.value)}
          className={styles.prioritySelect}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
        <button onClick={handleAddTask} className={styles.btnPrimary}>
          Add Task
        </button>
      </div>
    </div>
  );
}