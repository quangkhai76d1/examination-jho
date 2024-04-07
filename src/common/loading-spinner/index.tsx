import classNames from 'classnames/bind'
import styles from './loading-spinner.module.scss'

const cx = classNames.bind(styles)

interface LoadingSpinnerProps {
  className?: string
  type?: 'eclipse' | 'bars'
}

const LoadingSpinner = ({className, type = 'bars'}: LoadingSpinnerProps) => {
  return (
    <div className={cx('loading-spinner', [className, type])}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default LoadingSpinner
