import {Helmet} from 'react-helmet-async'
import ContentBox from '../../common/content-box'

const History = () => {
  return (
    <>
      <Helmet>
        <title>History</title>
      </Helmet>

      <ContentBox name="Historique des enchères" icon="hourglass">
        History
      </ContentBox>
    </>
  )
}

export default History
