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
          <button className='toggleTimeBar' onClick={onToggleSidebar}>
              <i className="bi bi-clock"></i>
          </button>
          <progress className='timeBar' value={0} max={100} />
        </ul>
      </nav>
    </header>
  )
}
