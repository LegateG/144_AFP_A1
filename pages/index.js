import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

// Home Page Component
export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Task Manager - Home</title>
        <meta name="description" content="Task Manager Application" />
      </Head>

      <Navbar />

      <main className={styles.container}>
        <div className={styles.page}>
          <div className={styles.welcomeSection}>
            <h1>Welcome to Task Manager! 👋</h1>
            <p>Organize your tasks efficiently and boost your productivity.</p>
            
            <div className={styles.featureCards}>
              <div className={styles.featureCard}>
                <h3>📝 Create Tasks</h3>
                <p>Add tasks with different priority levels</p>
              </div>
              <div className={styles.featureCard}>
                <h3>✅ Track Progress</h3>
                <p>Mark tasks as complete and monitor your progress</p>
              </div>
              <div className={styles.featureCard}>
                <h3>📊 View Stats</h3>
                <p>See your productivity statistics at a glance</p>
              </div>
            </div>
            
            <Link href="/tasks" className={styles.btnLarge}>
              Get Started
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}