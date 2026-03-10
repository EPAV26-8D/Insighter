import '../styles/navbar.css'
import styles from './BottomNavbar.module.css'

export function BottomNavbar() {
  return (
    <header className={`container ${styles.container}`}>
      <nav className="navbar">
        <ul className="navLinks">
          <li>
            <a href="/">
              <i className="bi bi-house"></i>
            </a>
          </li>
          <li>
            <a href="/map">
              <i className="bi bi-map"></i>
            </a>
          </li>
          <li>
            <a href="/calculator">
              <i className="bi bi-calculator"></i>
            </a>
          </li>
          <li>
            <a href="/checklist">
              <i className="bi bi-check-square"></i>
            </a>
          </li>
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
