import styles from './navbarTop.module.css'

type NavbarProps = {
  onToggleSidebar: () => void
}

export function Navbar({ onToggleSidebar }: NavbarProps) {
  return (
    <footer className={styles.footer}>
      <nav className={styles.navbar} aria-label="Navegação principal">
        <ul className={styles.navLinks}>
          <li>
            <button className={styles.toggleSidebar} onClick={onToggleSidebar}>
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
    </footer>
  )
}
