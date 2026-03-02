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
          <a href="">Bovinos</a>
        </li>
        <li>
          <a href="">Suínos</a>
        </li>
        <li>
          <a href="">Aves</a>
        </li>
        <li>
          <a href="">Pescados</a>
        </li>
        <li>
          <a href="">Entradas</a>
        </li>
        <li>
          <a href="">Acompanhamentos</a>
        </li>
        <li>
          <a href="">Sobremesas</a>
        </li>
        <li>
          <a href="">Bebidas</a>
        </li>
      </ul>

      <h5>Ocasiões</h5>
      <ul>
        <li>
          <a href="">Churrasco</a>
        </li>
        <li>
          <a href="">Almoço do Dia a Dia</a>
        </li>
        <li>
          <a href="">Almoço Especial</a>
        </li>
        <li>
          <a href="">Jantar do Dia a Dia</a>
        </li>
        <li>
          <a href="">Jantar Especial</a>
        </li>
      </ul>
    </aside>
  )
}
