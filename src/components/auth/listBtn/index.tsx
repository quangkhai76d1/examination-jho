import React from 'react'
import {useNavigate} from 'react-router-dom'

import LoadingButton from '../../../common/button/loading-button'
import classNames from 'classnames/bind'
import styles from './listBtn.module.scss'

const cx = classNames.bind(styles)

const listBtn = [
  {
    text: 'Connection avec Google',
    icon: 'google',
    font: 'other',
    iconGoogle: true,
  },
  {
    text: 'Connection avec Mail',
    icon: 'ico-envelope',
    font: 'other',
  },
]

const ListButton = () => {
  const navigate = useNavigate()

  const handleClick = (index: number) => {
    switch (index) {
      case 0:
        console.log('Connection avec Google')
        break
      case 1:
        navigate('/login')
        break
      default:
        break
    }
  }

  return (
    <div className={cx('container')}>
      {listBtn.map((btn, index) => (
        <React.Fragment key={index}>
          <LoadingButton
            kind="white"
            icon={btn.icon}
            font="other"
            size="full"
            iconGoogle={btn.iconGoogle}
            onClick={() => handleClick(index)}>
            {btn.text}
          </LoadingButton>
          {index < listBtn.length - 1 && <div className={cx('line')} />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default ListButton
