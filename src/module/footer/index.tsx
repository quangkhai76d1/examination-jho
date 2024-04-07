import {Link, useLocation} from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './footer.module.scss'

const cx = classNames.bind(styles)

const listIcon = [
  {
    icon: 'ico-bid',
    path: '/upcoming',
  },
  {
    icon: 'ico-hourglass',
    path: '/history',
  },
  {
    icon: 'ico-Icons',
    path: '/cart',
  },
  {
    icon: 'ico-user-circle',
    path: '/account',
  },
]

const Footer = () => {
  const location = useLocation()
  return (
    <div className={cx('footer')}>
      {listIcon.map((item, index) => {
        const isActive = location.pathname === item.path
        return (
          <Link to={item.path} key={index} className={cx('footer__link')}>
            <i className={cx('icon', item.icon, {active: isActive})}></i>
          </Link>
        )
      })}
    </div>
  )
}

export default Footer
