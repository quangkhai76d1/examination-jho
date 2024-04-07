import {AnimatePresence, motion} from 'framer-motion'
import classNames from 'classnames/bind'
import styles from './error-message.module.scss'

const cx = classNames.bind(styles)

const animateVariant = {
  visible: {
    y: '0',
    opacity: 1,
  },
  none: {
    y: '-100%',
    opacity: 0.5,
  },
}

interface ErrorMessageProps {
  className?: string
  showError?: boolean
  message?: string
  variant?: string
}

const ErrorMessage = ({showError, message, className, variant}: ErrorMessageProps) => {
  return (
    <AnimatePresence>
      {showError && message && (
        <motion.div
          initial="none"
          animate="visible"
          exit="none"
          transition={{duration: 0.3}}
          variants={animateVariant}
          className={cx('container', [variant], [className])}>
          <i className={cx(['ico-info-circle'])}></i>
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ErrorMessage
