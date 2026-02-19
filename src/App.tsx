import type { ReactNode } from 'react'
import { Home } from './pages/Home'

const routes: Record<string, ReactNode> = {
  '/': <Home />,
}

function App() {
  const currentRoute = window.location.pathname

  return routes[currentRoute] ?? <Home />
}

export default App
