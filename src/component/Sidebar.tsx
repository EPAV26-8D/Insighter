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
      <h3>Ocasiões</h3>
      <ul>
        <li className={styles.especial}>
          <a href="/especial">
            <h5>Páscoa</h5>
            <p>Ver Detalhes</p>
          </a>
        </li>
        <li>
          <a href="/churrasco">Churrasco</a>
        </li>
        <li>
          <a href="/almoco-dia-a-dia">Almoço do Dia a Dia</a>
        </li>
        <li>
          <a href="/almoco-especial">Almoço Especial</a>
        </li>
        <li>
          <a href="/jantar-dia-a-dia">Jantar do Dia a Dia</a>
        </li>
        <li>
          <a href="/jantar-especial">Jantar Especial</a>
        </li>
      </ul>
    </aside>
  )
}
