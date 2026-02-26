import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'theme-preference'

export function Settings() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
    const initialTheme: Theme = savedTheme === 'dark' ? 'dark' : 'light'

    document.documentElement.setAttribute('data-theme', initialTheme)
    setTheme(initialTheme)
  }, [])

  const handleToggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light'

    document.documentElement.setAttribute('data-theme', nextTheme)
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
    setTheme(nextTheme)
  }

  return (
    <>
      <h1>Configurações</h1>
      <button type="button" onClick={handleToggleTheme}>
        Alterar para modo {theme === 'light' ? 'escuro' : 'claro'}
      </button>
    </>
  )
}
