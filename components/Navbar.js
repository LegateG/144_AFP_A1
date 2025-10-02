import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

// Navigation component with active page highlighting
export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Task Manager</h1>
      <div className={styles.navLinks}>
        <Link href="/" className={router.pathname === '/' ? styles.active : ''}>
          Home
        </Link>
        <Link href="/tasks" className={router.pathname === '/tasks' ? styles.active : ''}>
          My Tasks
        </Link>
        <Link href="/stats" className={router.pathname === '/stats' ? styles.active : ''}>
          Statistics
        </Link>
      </div>
    </nav>
  );
}