import React from 'react'
import {
  StyledButtonFilled,
  StyledButtonTonal,
  StyledButtonStroke,
  StyledButtonClear,
} from './buttonStyles'

type ButtonVariant = 'filled' | 'tonal' | 'outline' | 'clear'
type ButtonSize = 'small' | 'regular' | 'large'
type ButtonShape = 'square' | 'regular' | 'round'

const variantMap = {
  filled: StyledButtonFilled,
  tonal: StyledButtonTonal,
  outline: StyledButtonStroke,
  clear: StyledButtonClear,
}

export interface ButtonProps {
  label?: string
  onClick?: () => void
  buttonStyle?: ButtonVariant
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  size?: ButtonSize
  shape?: ButtonShape
  style?: React.CSSProperties
  disabled?: boolean
  children?: React.ReactNode
  useAsContainer?: boolean
  isInteractive?: boolean
}

// Functional component using styled button with forwarded ref
const ButtonMaster = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      onClick = () => {},
      buttonStyle = 'filled',
      icon,
      iconPosition = 'left',
      fullWidth = false,
      size = 'regular',
      shape = 'regular',
      style,
      disabled = false,
      children,
      useAsContainer = false,
      isInteractive = true,
    },
    ref
  ) => {
    const StyledButton = variantMap[buttonStyle]
    const onlyIcon = !!(icon && !label)
    const noPadding = !label
    const noIconOrLabel = !(icon || label)

    return (
      <StyledButton
        ref={ref}
        onClick={onClick}
        fullWidth={fullWidth}
        onlyIcon={onlyIcon}
        noPadding={noPadding}
        noIconOrLabel={noIconOrLabel}
        size={size}
        shape={shape}
        style={style}
        tabIndex={0}
        disabled={disabled}
        useAsContainer={useAsContainer}
        isInteractive={isInteractive}
      >
        {icon && iconPosition === 'left' && (
          <span className='icon'>{icon}</span>
        )}
        {label && (
          <span className='label'>
            <strong>{label}</strong>
          </span>
        )}
        {icon && iconPosition === 'right' && (
          <span className='icon'>{icon}</span>
        )}
        {/* Render children if present */}
        {children}
      </StyledButton>
    )
  }
)

ButtonMaster.displayName = 'ButtonMaster'

export default ButtonMaster
