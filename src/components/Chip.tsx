import type { ReactNode } from 'react'

export type ChipTone = 'destructive' | 'neutral' | 'info' | 'success'
export type ChipVariant = 'filled' | 'outline'
export type ChipSize = 'sm' | 'md' | 'lg'

export type ChipProps = {
  label: string
  tone?: ChipTone
  variant?: ChipVariant
  size?: ChipSize
  icon?: ReactNode
  showCounter?: boolean
  counter?: number
  showClose?: boolean
  disabled?: boolean
  onClose?: () => void
}

export default function Chip({
  label,
  tone = 'destructive',
  variant = 'filled',
  size = 'lg',
  icon,
  showCounter = false,
  counter = 0,
  showClose = false,
  disabled = false,
  onClose,
}: ChipProps) {
  return (
    <span className={`chip chip--${variant} chip--${tone} chip--${size} ${disabled ? 'chip--disabled' : ''}`}>
      {icon ? <span className="chip__icon">{icon}</span> : null}
      <span className="chip__label">{label}</span>
      {showCounter ? <span className="chip__badge">{counter}</span> : null}
      {showClose ? (
        <button className="chip__close" type="button" aria-label="Remove" onClick={onClose}>
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M4 4l8 8M12 4l-8 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      ) : null}
    </span>
  )
}
