import Slider, {Content} from '../../../components/auth/slider'
import classNames from 'classnames/bind'
import styles from './introduce.module.scss'
import {Helmet} from 'react-helmet-async'

const cx = classNames.bind(styles)

const contents: Content[] = [
  {
    id: 1,
    title: 'Bienvenue sur',
    description: 'L’app d’enchère la plus folle !',
    imageUrl: 'src/assets/img/logo-auth.png',
  },
  {
    id: 2,
    title: 'Fais des économies avec nos super offres',
    description:
      'Retrouve tes produits préférés et des exclusivités que ne trouveras nulle part ailleurs.',
    imageUrl: 'src/assets/img/logo-auth-1.png',
  },
  {
    id: 3,
    title: 'Participe à des enchères de folie',
    description:
      'Tiens-toi prêt à miser n’importe où, n’importe quand avec des enchères à durée ultra-limitée.',
    imageUrl: 'src/assets/img/logo-auth-2.png',
  },
]

const Introduce = () => {
  return (
    <>
      <Helmet>
        <title>Introduce</title>
      </Helmet>

      <div className={cx('introduce')}>
        <Slider contents={contents} />
      </div>
    </>
  )
}

export default Introduce
