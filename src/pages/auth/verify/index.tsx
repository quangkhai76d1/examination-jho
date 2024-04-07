import {Helmet} from 'react-helmet-async'
import Verify from '../../../components/auth/verify'

const VerifyPage = () => {
  return (
    <>
      <Helmet>
        <title>Verify</title>
      </Helmet>
      <Verify />
    </>
  )
}

export default VerifyPage
