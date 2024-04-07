import {Outlet} from 'react-router-dom'

import classNames from 'classnames/bind'
import styles from './auth.module.scss'

import logoAuth from '../../assets/img/logo-auth.png'
import titleAuth from '../../assets/img/title.svg'

const cx = classNames.bind(styles)

const AuthLayout = () => {
  return (
    <div className={cx('auth')}>
      <img src={logoAuth} alt="Banner auth" />
      <div className={cx('title')}>
        <h4 className={cx('title__desc')}>Créer un compte</h4>
        <img className={cx('title__img')} src={titleAuth} alt="Title auth" />
      </div>

      <main className={cx('content')}>
        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout
