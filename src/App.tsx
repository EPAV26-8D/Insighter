import { useEffect, useState } from 'react'
import { NavbarTop } from './component/NavbarTop'
import { Sidebar } from './component/Sidebar'
import { AlmocoDiaaDia } from './pages/AlmocoDiaaDia'
import { AlmocoEspecial } from './pages/AlmocoEspecial'
import { Churrasco } from './pages/Churrasco'
import { Home } from './pages/Home'
import { JantarDiaaDia } from './pages/JantarDiaaDia'
import { JantarEspecial } from './pages/JantarEspecial'
import { Especial } from './pages/Especial'
import { Settings } from './pages/Settings'
import './App.css'

type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'theme-preference'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>('light')
  const currentRoute = window.location.pathname

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
    const initialTheme: Theme = savedTheme === 'dark' ? 'dark' : 'light'

    document.documentElement.setAttribute('data-theme', initialTheme)
    setTheme(initialTheme)
  }, [])

  const handleToggleSidebar = () => {
    setIsSidebarOpen((previousState) => !previousState)
  }

  const handleToggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light'

    document.documentElement.setAttribute('data-theme', nextTheme)
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
    setTheme(nextTheme)
  }

  const pageByRoute = {
    '/': <Home />,
    '/settings': <Settings theme={theme} onToggleTheme={handleToggleTheme} />,
    '/churrasco': <Churrasco />,
    '/almoco-dia-a-dia': <AlmocoDiaaDia />,
    '/almoco-especial': <AlmocoEspecial />,
    '/jantar-dia-a-dia': <JantarDiaaDia />,
    '/jantar-especial': <JantarEspecial />,
    '/especial': <Especial />,
  }

  const currentPage = pageByRoute[currentRoute as keyof typeof pageByRoute] ?? <Home />

  return (
    <>
      <NavbarTop onToggleSidebar={handleToggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <main>{currentPage}</main>
    </>
  )
}

export default App
