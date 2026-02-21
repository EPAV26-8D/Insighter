import styles from './sidebar.module.css'

type SidebarProps = {
  isOpen: boolean
}

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.open : ''}`.trim()}
      aria-hidden={!isOpen}
    >
      <ul>
        <li>
          <a href="/">Início</a>
        </li>
        <li>
          <a href="/settings">Configurações</a>
        </li>
      </ul>
    </aside>
  )
}
