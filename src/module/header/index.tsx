import classNames from 'classnames/bind'
import styles from './header.module.scss'
import logo from '../../assets/img/logo.svg'

const cx = classNames.bind(styles)

const Header = () => {
  return (
    <div className={cx('header')}>
      <div className={cx('header__top')}>
        <img src={logo} alt="logo" />
        <div className={cx('header__right')}>
          <div className={cx('budget')}>
            <span className={cx('number')}>43</span>
            <i className={cx('ico-Icons', 'icon')}></i>
          </div>

          <div className={cx('line')} />

          <button className={cx('account')}>
            <i className={cx('ico-user-circle', 'icon')}></i>
          </button>
        </div>
      </div>

      <div className={cx('header__bottom')}>
        <div className={cx('line')}></div>
        <div className={cx('line')}></div>
        <div className={cx('line')}></div>
        <div className={cx('line')}></div>
      </div>
    </div>
  )
}

export default Header
