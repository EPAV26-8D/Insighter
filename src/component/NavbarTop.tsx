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
          <button className='showTime' onClick={onToggleSidebar}>
              <i className="bi bi-clock"></i>
          </button>
        </ul>
      </nav>
    </header>
  )
}
