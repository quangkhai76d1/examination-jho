import {Helmet} from 'react-helmet-async'
import ListButton from '../../../components/auth/listBtn'

import classNames from 'classnames/bind'
import styles from './auth.module.scss'

const cx = classNames.bind(styles)

const AuthPage = () => {
  return (
    <>
      <Helmet>
        <title>Auth</title>
      </Helmet>

      <div className={cx('auth')}>
        <ListButton />
      </div>
    </>
  )
}

export default AuthPage
