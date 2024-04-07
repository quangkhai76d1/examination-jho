import classNames from 'classnames/bind'
import styles from './App.module.scss'

const cx = classNames.bind(styles)

function App() {
  return (
    <>
      <div className={cx('app')}>
        <i className={cx('ico-hourglass', 'icon')}></i>
        <p className={cx('text')}>Quang Khai</p>
      </div>
    </>
  )
}

export default App
