import ContentBox from '../../common/content-box'
import ListCard from '../../components/upcoming/list-card'

import classNames from 'classnames/bind'
import styles from './upcoming.module.scss'
import {Helmet} from 'react-helmet-async'

const cx = classNames.bind(styles)

const UpcomingPage = () => {
  return (
    <>
      <Helmet>
        <title>Upcoming</title>
      </Helmet>

      <ContentBox name="Enchères à venir" icon="bid">
        <div className={cx('upcoming')}>
          <div className={cx('upcoming__block')}>
            <i className={cx('ico-calendar-days')}></i>
            <h4>Aujourd’hui</h4>
          </div>
          <ListCard />
        </div>
      </ContentBox>
    </>
  )
}

export default UpcomingPage
