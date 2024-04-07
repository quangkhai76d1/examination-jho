import {Outlet} from 'react-router-dom'
import Footer from '../../module/footer'
import Header from '../../module/header'

import classNames from 'classnames/bind'
import styles from './default-layout.module.scss'

const cx = classNames.bind(styles)

const DefaultLayout = () => {
  return (
    <div className={cx('layout')}>
      <div className={cx('header')}>
        <Header />
      </div>

      <main className={cx('content')}>
        <Outlet />
      </main>

      <div className={cx('footer')}>
        <Footer />
      </div>
    </div>
  )
}

export default DefaultLayout
