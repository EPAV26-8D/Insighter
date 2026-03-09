import '../styles/navbar.css'
import styles from './navbarBottom.module.css'

export function NavbarBottom() {
  return (
    <header className={`container ${styles.container}`}>
      <nav className='navbar'>
        <ul className='navLinks'>
          <li>
            <a href="/">
              <i className="bi bi-house"></i>
            </a>
          </li>
          <li>
            <a href="/calculadora">
              <i className="bi bi-calculator"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
