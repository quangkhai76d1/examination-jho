/* eslint-disable @typescript-eslint/no-explicit-any */
import ItemCard from '../item-card'
import classNames from 'classnames/bind'
import styles from './list-card.module.scss'
import listCard from '../../../db/upcoming.json'

const cx = classNames.bind(styles)

const ListCard = () => {
  return (
    <div className={cx('list-card')}>
      {listCard.length > 0 ? (
        listCard.map((item: any, index) => <ItemCard key={index} {...item} />)
      ) : (
        <div className={cx('no-data')}>No item</div>
      )}
    </div>
  )
}

export default ListCard
