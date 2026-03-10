import { useEffect, useState } from 'react'
import { BottomNavbar } from './components/NavbarBottom'
import { Sidebar } from './components/Sidebar'
import { TopNavbar } from './components/NavbarTop'
import { BarbecuePage } from './pages/BarbecuePage'
import { EasterPage } from './pages/EasterPage'
import { EverydayDinnerPage } from './pages/EverydayDinnerPage'
import { EverydayLunchPage } from './pages/EverydayLunchPage'
import { HomePage } from './pages/HomePage'
import { SettingsPage } from './pages/SettingsPage'
import { SpecialDinnerPage } from './pages/SpecialDinnerPage'
import { SpecialLunchPage } from './pages/SpecialLunchPage'
import './App.css'

type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'theme-preference'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
    return savedTheme === 'dark' ? 'dark' : 'light'
  })
  const currentRoute = window.location.pathname

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const handleSidebarToggle = () => {
    setIsSidebarOpen((previousState) => !previousState)
  }

  const handleThemeToggle = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light'

    setTheme(nextTheme)
  }

  const pageByRoute = {
    '/': <HomePage />,
    '/settings': <SettingsPage theme={theme} onThemeToggle={handleThemeToggle} />,
    '/barbecue': <BarbecuePage />,
    '/everyday-lunch': <EverydayLunchPage />,
    '/special-lunch': <SpecialLunchPage />,
    '/everyday-dinner': <EverydayDinnerPage />,
    '/special-dinner': <SpecialDinnerPage />,
    '/easter': <EasterPage />,
  }

  const currentPage = pageByRoute[currentRoute as keyof typeof pageByRoute] ?? <HomePage />

  return (
    <>
      <TopNavbar onSidebarToggle={handleSidebarToggle} />
      <BottomNavbar />
      <Sidebar isOpen={isSidebarOpen} />
      <main>{currentPage}</main>
    </>
  )
}

export default App
