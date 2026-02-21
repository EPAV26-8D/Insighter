import styles from './navbar.module.css'

export function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Navegação principal">
        <ul className={styles.navLinks}>
          <li>
            <a href="/">
              <i className="bi bi-house"></i>
            </a>
          </li>
        </ul>

        <input className={styles.searchbar} type="search" />

        <ul className={styles.navLinks}>
          <li>
            <a href="/settings">
              <i className="bi bi-gear"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
