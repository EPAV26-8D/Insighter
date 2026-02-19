import type { ReactNode } from 'react'
import { Home } from './pages/Home'
import './App.css'

const routes: Record<string, ReactNode> = {
  '/': <Home />,
}

function App() {
  const currentRoute = window.location.pathname

  return routes[currentRoute] ?? <Home />
}

export default App
