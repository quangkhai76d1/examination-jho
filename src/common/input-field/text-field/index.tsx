import classNames from 'classnames/bind'
import {HTMLInputTypeAttribute, useState} from 'react'
import {useFormContext} from 'react-hook-form'
import styles from './text-field.module.scss'
import ErrorMessage from '../error-message'

const cx = classNames.bind(styles)

interface TextFieldProps {
  label?: string
  placeholder: string
  name: string
  showError?: boolean
  type?: HTMLInputTypeAttribute
  variant?: 'no-border' | 'auth'
  errorVariant?: string
  className?: string
  autoComplete?: string
  readonly?: boolean
  disabled?: boolean
  icon?: string
}

const TextField = ({
  label,
  placeholder,
  name,
  variant,
  type = 'text',
  showError = true,
  errorVariant,
  className,
  autoComplete,
  readonly,
  disabled,
  icon,
}: TextFieldProps) => {
  const [inputType, setInputType] = useState(type)
  const {
    register,
    formState: {errors},
  } = useFormContext()

  const isHidePassword = inputType === 'password'

  const hideOrShowPassword = () => {
    if (isHidePassword) {
      return setInputType('text')
    }
    return setInputType('password')
  }

  return (
    <div className={cx('form-group', [`form-group--${variant}`, className])}>
      <div className={cx('form-content')}>
        {label && (
          <label className={cx('form__label')} htmlFor={name}>
            {label}
          </label>
        )}
        <div className={cx('form-input-container')}>
          {icon && <i className={cx('form__icon', `ico-${icon}`)}></i>}

          <input
            autoComplete={autoComplete}
            type={inputType}
            className={cx('form__input', {password: type === 'password'})}
            placeholder={placeholder}
            readOnly={readonly}
            disabled={disabled}
            {...register(name)}
            id={name}
          />

          {type === 'password' && (
            <button type="button" className={cx('password__btn')} onClick={hideOrShowPassword}>
              <i className={cx([`ico-eye${isHidePassword ? '-slash' : '-open'}`])}></i>
            </button>
          )}
        </div>
      </div>

      <ErrorMessage
        variant={errorVariant}
        showError={showError && !!errors[name]}
        message={`${errors[name]?.message}`}
      />
    </div>
  )
}

export default TextField
