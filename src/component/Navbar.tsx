import styles from './navbar.module.css'

export function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Navegação principal">
        <a href="/" className={styles.logo}>
          Insighter
        </a>

        <ul className={styles.navLinks}>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
