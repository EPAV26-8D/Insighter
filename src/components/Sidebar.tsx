import styles from './Sidebar.module.css'

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
        <li className={styles.highlightedEvent}>
          <a href="/easter">
            <h5>Páscoa</h5>
            <p>Ver Detalhes</p>
          </a>
        </li>
        <li>
          <a href="/barbecue">Churrasco</a>
        </li>
        <li>
          <a href="/everyday-lunch">Almoço do Dia a Dia</a>
        </li>
        <li>
          <a href="/special-lunch">Almoço Especial</a>
        </li>
        <li>
          <a href="/everyday-dinner">Jantar do Dia a Dia</a>
        </li>
        <li>
          <a href="/special-dinner">Jantar Especial</a>
        </li>
      </ul>
    </aside>
  )
}
