import styles from '../styles/Home.module.css';

// Component 2: TaskItem - Individual task with toggle completion
export default function TaskItem({ task, onToggle, onDelete }) {
  // Event Handler 2: Button click for task actions
  return (
    <div className={`${styles.taskItem} ${task.completed ? styles.completed : ''} ${styles['priority-' + task.priority]}`}>
      <div className={styles.taskContent}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className={styles.taskCheckbox}
        />
        <span className={styles.taskText}>{task.text}</span>
        <span className={styles.taskPriority}>{task.priority}</span>
      </div>
      <button onClick={() => onDelete(task.id)} className={styles.btnDelete}>
        Delete
      </button>
    </div>
  );
}