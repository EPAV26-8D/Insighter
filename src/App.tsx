import { useState, type ReactNode } from 'react'
import { Navbar } from './component/Navbar'
import { Sidebar } from './component/Sidebar'
import { Home } from './pages/Home'
import { Settings } from './pages/Settings'
import './App.css'

const routes: Record<string, ReactNode> = {
  '/': <Home />,
  '/settings': <Settings />
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const currentRoute = window.location.pathname
  const currentPage = routes[currentRoute] ?? <Home />

  const handleToggleSidebar = () => {
    setIsSidebarOpen((previousState) => !previousState)
  }

  return (
    <>
      <Navbar onToggleSidebar={handleToggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <main>{currentPage}</main>
    </>
  )
}

export default App
