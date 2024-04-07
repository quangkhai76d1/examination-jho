/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind'
import styles from './verify.module.scss'
import logoAccept from '../../../assets/img/logo-accept.png'
import LoadingButton from '../../../common/button/loading-button'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const cx = classNames.bind(styles)

const listLink = [
  {name: 'Conditions Générales d’Utilisation'},
  {name: 'Conditions Générales de Ventes'},
  {
    name: 'Politique de Confidentialité',
  },
]

const Verify = () => {
  const navigate = useNavigate()

  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked)
  }

  const handleBack = () => {
    navigate(-1)
  }

  const handleAccept = () => {
    navigate('/upcoming')
  }

  return (
    <div className={cx('verify')}>
      <img src={logoAccept} alt="logo" className={cx('verify__img')} />

      <div className={cx('verify__list')}>
        {listLink.map((item, index) => {
          return (
            <button className={cx('button')} key={index}>
              {item.name}
            </button>
          )
        })}
      </div>

      <div className={cx('checkbox')}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className={cx('input')}
        />
        <label>J'accepte les conditions de l'application</label>
      </div>

      <div className={cx('button')}>
        <LoadingButton font="icon" icon="ico-arrow-uturn-left" kind="icon" onClick={handleBack} />

        <LoadingButton
          onClick={handleAccept}
          className={cx('button__verify')}
          size="flex-1"
          disabled={!isChecked}>
          Je confirme
        </LoadingButton>
      </div>
    </div>
  )
}

export default Verify
