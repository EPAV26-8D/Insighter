import styles from './navbar.module.css'

export function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Navegação principal">
        <ul className={styles.navLinks}>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
