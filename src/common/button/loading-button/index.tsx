import classNames from 'classnames/bind'
import {MouseEvent, ReactNode} from 'react'
import LoadingSpinner from '../../loading-spinner'
import styles from './loading-button.module.scss'
import iconGG from '../../../assets/img/google.svg'

const cx = classNames.bind(styles)

interface LoadingButtonProps {
  icon?: string
  iconSize?: 'auto' | 'fixed'
  kind?: 'solid' | 'outline' | 'white' | 'icon'
  variant?: 'primary' | 'info' | 'danger'
  color?: 'primary-80' | 'primary-70'
  disabled?: boolean
  loading?: boolean
  loadingText?: string
  size?: 'full' | 'flex-1'
  font?: 'sm' | 'md' | 'lg' | 'other' | 'icon'
  type?: 'button' | 'submit' | 'reset'
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void
  className?: string
  children?: ReactNode
  iconGoogle?: boolean
}

const LoadingButton = ({
  children,
  className,
  onClick,
  icon,
  loading,
  loadingText,
  variant,
  size,
  type,
  color,
  iconSize = 'fixed',
  disabled = false,
  kind = 'solid',
  font = 'md',
  iconGoogle = false,
}: LoadingButtonProps) => {
  const btnVariant = variant && `btn--${variant}`
  const btnStyle = `btn--${kind}`
  const btnSize = size && `btn--size-${size}`
  const btnColor = color && `btn--${color}`
  const btnFont = `btn--font-${font}`

  const handleClick = (event?: MouseEvent<HTMLButtonElement>) => {
    if (!loading && onClick) onClick(event)
  }

  return (
    <button
      className={cx('btn', btnStyle, btnVariant, btnFont, btnSize, btnColor, {disabled, loading}, [
        className,
      ])}
      type={type}
      disabled={disabled}
      onClick={handleClick}>
      {loading && !disabled ? (
        <>
          <LoadingSpinner className={cx('spinner')} type="eclipse" />
          {loadingText && <span>{loadingText}</span>}
        </>
      ) : (
        <>
          {icon && <i className={cx('btn__icon', [icon, iconSize])}></i>}
          {iconGoogle && (
            <img
              src={iconGG}
              alt="icon-google"
              className={cx('btn__icon', [icon, iconSize])}
              width={24}
              height={24}
            />
          )}
          <span>{children}</span>
        </>
      )}
    </button>
  )
}

export default LoadingButton
