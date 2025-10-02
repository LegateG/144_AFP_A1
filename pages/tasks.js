import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import styles from '../styles/Home.module.css';

// Tasks Page Component
export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // Load tasks from memory on component mount
  useEffect(() => {
    // You could load from an API here in a real application
  }, []);

  // Function to add new task (passed as prop to TaskForm)
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Function to toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Filter tasks based on current filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className={styles.app}>
      <Head>
        <title>Task Manager - My Tasks</title>
      </Head>

      <Navbar />

      <main className={styles.container}>
        <div className={styles.page}>
          <TaskForm onAddTask={addTask} />
          
          <div className={styles.filterSection}>
            <h2>My Tasks</h2>
            <div className={styles.filterButtons}>
              <button 
                onClick={() => setFilter('all')}
                className={filter === 'all' ? styles.filterBtnActive : styles.filterBtn}
              >
                All
              </button>
              <button 
                onClick={() => setFilter('pending')}
                className={filter === 'pending' ? styles.filterBtnActive : styles.filterBtn}
              >
                Pending
              </button>
              <button 
                onClick={() => setFilter('completed')}
                className={filter === 'completed' ? styles.filterBtnActive : styles.filterBtn}
              >
                Completed
              </button>
            </div>
          </div>

          <div className={styles.taskList}>
            {/* Conditional Rendering: Show message if no tasks match filter */}
            {filteredTasks.length === 0 ? (
              <p className={styles.emptyMessage}>
                {filter === 'all' 
                  ? 'No tasks yet. Create one above!' 
                  : `No ${filter} tasks.`}
              </p>
            ) : (
              filteredTasks.map(task => (
                <TaskItem 
                  key={task.id}
                  task={task}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}