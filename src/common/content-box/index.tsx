import classNames from 'classnames/bind'
import styles from './content-box.module.scss'
import {ReactNode} from 'react'

const cx = classNames.bind(styles)

interface ContentBoxProps {
  children: ReactNode
  name: string
  icon?: string
}

const ContentBox = ({children, name, icon}: ContentBoxProps) => {
  return (
    <div className={cx('content-box')}>
      <div className={cx('title')}>
        <h4 className={cx('title__desc')}>{name}</h4>
        <i className={cx(`ico-${icon}`, 'title__icon')}></i>
      </div>

      <div className={cx('line')}></div>

      <div className={cx('content')}>{children}</div>
    </div>
  )
}

export default ContentBox
