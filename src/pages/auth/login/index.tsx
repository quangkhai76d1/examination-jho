import classNames from 'classnames/bind'
import styles from './login.module.scss'

import {Helmet} from 'react-helmet-async'
import Login from '../../../components/auth/login'

const cx = classNames.bind(styles)

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div className={cx('login')}>
        <Login />
      </div>
    </>
  )
}

export default LoginPage
