import '../styles/navbar.css'
import styles from './navbarTop.module.css'

type NavbarProps = {
  onToggleSidebar: () => void
}

export function NavbarTop({ onToggleSidebar }: NavbarProps) {
  return (
    <header className={`container ${styles.container}`}>
      <nav className='navbar'>
        <ul className='navLinks'>
          <button className='toggleSidebar' onClick={onToggleSidebar}>
              <i className="bi bi-list"></i>
          </button>
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
