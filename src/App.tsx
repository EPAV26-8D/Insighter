import type { ReactNode } from 'react'
import { Navbar } from './component/Navbar'
import { Home } from './pages/Home'
import './App.css'

const routes: Record<string, ReactNode> = {
  '/': <Home />,
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
