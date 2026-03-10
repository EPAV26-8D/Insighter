import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import '../styles/navbar.css'
import styles from './TopNavbar.module.css'

type TopNavbarProps = {
  onSidebarToggle: () => void
}

const TIME_ZONE = 'America/Sao_Paulo'
const START_MINUTES = 9 * 60 + 30
const END_MINUTES = 10 * 60 + 30
const WINDOW_DURATION = END_MINUTES - START_MINUTES

function calculateTimeBarProgress(date: Date): number {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    weekday: 'short',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  })

  const parts = formatter.formatToParts(date)
  const weekday = parts.find((part) => part.type === 'weekday')?.value
  const hour = Number(parts.find((part) => part.type === 'hour')?.value)
  const minute = Number(parts.find((part) => part.type === 'minute')?.value)

  if (weekday !== 'Thu' || Number.isNaN(hour) || Number.isNaN(minute)) {
    return 0
  }

  const currentMinutes = hour * 60 + minute

  if (currentMinutes < START_MINUTES || currentMinutes >= END_MINUTES) {
    return 0
  }

  return ((currentMinutes - START_MINUTES) / WINDOW_DURATION) * 100
}

export function TopNavbar({ onSidebarToggle }: TopNavbarProps) {
  const navRef = useRef<HTMLElement>(null)
  const [isTimeBarVisible, setIsTimeBarVisible] = useState(false)
  const [containerWidth, setContainerWidth] = useState<number | null>(null)
  const [progress, setProgress] = useState(() => calculateTimeBarProgress(new Date()))

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress(calculateTimeBarProgress(new Date()))
    }, 1000)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  const progressValue = useMemo(() => Number(progress.toFixed(2)), [progress])

  useLayoutEffect(() => {
    const measureNavbarWidth = () => {
      if (!navRef.current) {
        return
      }

      setContainerWidth(navRef.current.scrollWidth)
    }

    measureNavbarWidth()

    if (!navRef.current || !('ResizeObserver' in window)) {
      return
    }

    const resizeObserver = new ResizeObserver(measureNavbarWidth)
    resizeObserver.observe(navRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  useLayoutEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (!navRef.current) {
        return
      }

      setContainerWidth(navRef.current.scrollWidth)
    })

    return () => {
      window.cancelAnimationFrame(frame)
    }
  }, [isTimeBarVisible])

  const toggleTimeBar = () => {
    setIsTimeBarVisible((previousState) => !previousState)
  }

  return (
    <header
      className={`container ${styles.container}`}
      style={containerWidth !== null ? { width: `${containerWidth}px` } : undefined}
    >
      <nav ref={navRef} className="navbar">
        <ul className="navLinks">
          <button className="toggleSidebar" onClick={onSidebarToggle}>
            <i className="bi bi-list"></i>
          </button>
          <button className="toggleTimeBar" onClick={toggleTimeBar}>
            <i className="bi bi-clock"></i>
          </button>
          {isTimeBarVisible && <progress className="timeBar" value={progressValue} max={100} />}
        </ul>
      </nav>
    </header>
  )
}
