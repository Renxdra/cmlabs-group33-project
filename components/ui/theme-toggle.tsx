'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from './button'

// Custom Crescent Icon Component (proper crescent shape)
const CrescentIcon = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 3a9 9 0 1 0 9 9c0-.46-.02-.92-.05-1.37a7 7 0 1 1-7.58-7.58c.45-.03.91-.05 1.37-.05z" />
  </svg>
)

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="rounded-lg hover:bg-muted transition-colors"
    >
      {theme === 'dark' ? <Sun className="h-5 w-5" /> : <CrescentIcon className="h-5 w-5" />}
    </Button>
  )
}