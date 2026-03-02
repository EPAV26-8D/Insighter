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
      <h5>Categorias</h5>
      <ul>
        <li>
          <a href="/bovinos">Bovinos</a>
        </li>
        <li>
          <a href="/suinos">Suínos</a>
        </li>
        <li>
          <a href="/aves">Aves</a>
        </li>
        <li>
          <a href="/pescados">Pescados</a>
        </li>
        <li>
          <a href="/entradas">Entradas</a>
        </li>
        <li>
          <a href="/acompanhamentos">Acompanhamentos</a>
        </li>
        <li>
          <a href="/sobremesas">Sobremesas</a>
        </li>
        <li>
          <a href="/bebidas">Bebidas</a>
        </li>
      </ul>

      <h5>Ocasiões</h5>
      <ul>
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
