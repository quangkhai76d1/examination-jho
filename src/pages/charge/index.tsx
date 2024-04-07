import {Helmet} from 'react-helmet-async'
import ContentBox from '../../common/content-box'

const Charge = () => {
  return (
    <>
      <Helmet>
        <title>Charge</title>
      </Helmet>

      <ContentBox name="Recharge" icon="Icons">
        Charge
      </ContentBox>
    </>
  )
}

export default Charge
