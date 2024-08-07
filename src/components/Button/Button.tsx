// src/components/Button.jsx
import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledButtonFilled,
  StyledButtonTonal,
  StyledButtonStroke,
  StyledButtonText,
} from './buttonStyles'

type ButtonVariant = 'filled' | 'tonal' | 'outline' | 'text'

const variantMap = {
  filled: StyledButtonFilled,
  tonal: StyledButtonTonal,
  outline: StyledButtonStroke,
  text: StyledButtonText,
}

interface ButtonProps {
  label?: string
  onClick?: () => void
  buttonStyle?: ButtonVariant
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
}

// Functional component using styled button
const Button: React.FC<ButtonProps> = ({
  label,
  onClick = () => {},
  buttonStyle = 'filled',
  icon,
  iconPosition = 'left',
  fullWidth = false,
}) => {
  const StyledButton = variantMap[buttonStyle]

  return (
    <StyledButton onClick={onClick} fullWidth={fullWidth}>
      {icon && iconPosition === 'left' && <span className='icon'>{icon}</span>}
      {label && <span className='label'>{label}</span>}
      {icon && iconPosition === 'right' && <span className='icon'>{icon}</span>}
    </StyledButton>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  buttonStyle: PropTypes.oneOf(['filled', 'tonal', 'outline', 'text']),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
}

export default Button
