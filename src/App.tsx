import type { ReactNode } from 'react'
import { Navbar } from './component/Navbar'
import { Home } from './pages/Home'
import { Settings } from './pages/Settings'
import './App.css'

const routes: Record<string, ReactNode> = {
  '/': <Home />,
  '/settings': <Settings />
}

function App() {
  const currentRoute = window.location.pathname
  const currentPage = routes[currentRoute] ?? <Home />

  return (
    <>
      <Navbar />
      <main>{currentPage}</main>
    </>
  )
}

export default App
