type Theme = 'light' | 'dark'

type SettingsProps = {
  theme: Theme
  onToggleTheme: () => void
}

export function Settings({ theme, onToggleTheme }: SettingsProps) {
  return (
    <>
      <h1>Configurações</h1>
      <button type="button" onClick={onToggleTheme}>
        Alterar para modo {theme === 'light' ? 'escuro' : 'claro'}
      </button>
    </>
  )
}
