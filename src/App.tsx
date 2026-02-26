import { useEffect, useState } from 'react'
import { Navbar } from './component/Navbar'
import { Sidebar } from './component/Sidebar'
import { Home } from './pages/Home'
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

  const currentPage =
    currentRoute === '/settings' ? (
      <Settings theme={theme} onToggleTheme={handleToggleTheme} />
    ) : (
      <Home />
    )

  return (
    <>
      <Navbar onToggleSidebar={handleToggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <main>{currentPage}</main>
    </>
  )
}

export default App
