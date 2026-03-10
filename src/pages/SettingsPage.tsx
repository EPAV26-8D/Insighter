type Theme = 'light' | 'dark'

type SettingsPageProps = {
  theme: Theme
  onThemeToggle: () => void
}

export function SettingsPage({ theme, onThemeToggle }: SettingsPageProps) {
  return (
    <>
      <h1>Configurações</h1>
      <button type="button" onClick={onThemeToggle}>
        Alterar para modo {theme === 'light' ? 'escuro' : 'claro'}
      </button>
    </>
  )
}
