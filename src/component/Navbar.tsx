import styles from './navbar.module.css'

export function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Navegação principal">
        <ul className={styles.navLinks}>
          <li>
            <button className="openAside">
              <i className="bi bi-list"></i>
            </button>
          </li>
          <li>
            <a href="/">
              <i className="bi bi-house"></i>
            </a>
          </li>
        </ul>

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
