import '../styles/navbar.css'
import styles from './navbarBottom.module.css'

export function NavbarBottom() {
  return (
    <header className={`container ${styles.container}`}>
      <nav className='navbar'>
        <ul className='navLinks'>
          <li>
            <button className='toggleSidebar'>
              <i className="bi bi-list"></i>
            </button>
          </li>
          <li>
            <a href="/">
              <i className="bi bi-house"></i>
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
