import classNames from 'classnames/bind'
import styles from './item-card.module.scss'

const cx = classNames.bind(styles)

interface ItemCardProps {
  imageUrl: string
  name: string
  price: number
  priceConverted: number
  priceUnlocked: number
}

const ItemCard = ({imageUrl, name, price, priceConverted, priceUnlocked}: ItemCardProps) => {
  return (
    <div className={cx('item-card')}>
      <div className={cx('image')}>
        <img src={imageUrl} alt="Image Card" />
        <div className={cx('overlay')} />
      </div>

      <div className={cx('content')}>
        <h4>{name}</h4>

        <div className={cx('price')}>
          <h5>Prix magasin</h5>
          <span className={cx('price__number')}>{price}€</span>
          <div className={cx('price__convert')}>
            <span> ={priceConverted}</span>
            <i className={cx('ico-Icons', '')}></i>
          </div>
        </div>

        <div className={cx('unlock')}>
          <h5>Débloquer</h5>
          <div className={cx('unlock__container')}>
            <span>{priceUnlocked}</span>
            <i className={cx('ico-Icons', '')}></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
