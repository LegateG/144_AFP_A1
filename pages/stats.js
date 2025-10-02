import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import TaskStats from '../components/TaskStats';
import styles from '../styles/Home.module.css';

// Statistics Page Component
export default function Stats() {
  const [tasks, setTasks] = useState([]);

  // In a real app, you'd fetch tasks from an API or shared state
  // For this demo, we'll use sample data
  useEffect(() => {
    // Load sample tasks for demonstration
    const sampleTasks = [
      { id: 1, text: 'Complete React assignment', priority: 'high', completed: true },
      { id: 2, text: 'Study for exam', priority: 'high', completed: false },
      { id: 3, text: 'Go grocery shopping', priority: 'medium', completed: false },
      { id: 4, text: 'Read a book', priority: 'low', completed: true },
    ];
    setTasks(sampleTasks);
  }, []);

  return (
    <div className={styles.app}>
      <Head>
        <title>Task Manager - Statistics</title>
      </Head>

      <Navbar />

      <main className={styles.container}>
        <div className={styles.page}>
          <TaskStats tasks={tasks} />
        </div>
      </main>
    </div>
  );
}