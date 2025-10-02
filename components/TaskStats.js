import styles from '../styles/Home.module.css';

// Component 3: TaskStats - Displays statistics about tasks
export default function TaskStats({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  // Conditional Rendering: Show different messages based on task count
  return (
    <div className={styles.taskStats}>
      <h3>Task Statistics</h3>
      {total === 0 ? (
        <p className={styles.emptyMessage}>No tasks yet! Add one to get started.</p>
      ) : (
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>{total}</span>
            <span className={styles.statLabel}>Total Tasks</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>{completed}</span>
            <span className={styles.statLabel}>Completed</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>{pending}</span>
            <span className={styles.statLabel}>Pending</span>
          </div>
        </div>
      )}
      
      {/* Conditional Rendering: Show task breakdown by priority */}
      {tasks.length > 0 && (
        <div className={styles.priorityBreakdown}>
          <h3>Priority Breakdown</h3>
          <div className={styles.priorityStats}>
            <div className={styles.priorityItem}>
              <span className={`${styles.priorityBadge} ${styles.high}`}>High</span>
              <span>{tasks.filter(t => t.priority === 'high').length} tasks</span>
            </div>
            <div className={styles.priorityItem}>
              <span className={`${styles.priorityBadge} ${styles.medium}`}>Medium</span>
              <span>{tasks.filter(t => t.priority === 'medium').length} tasks</span>
            </div>
            <div className={styles.priorityItem}>
              <span className={`${styles.priorityBadge} ${styles.low}`}>Low</span>
              <span>{tasks.filter(t => t.priority === 'low').length} tasks</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}