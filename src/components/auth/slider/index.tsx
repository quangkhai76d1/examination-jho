import classNames from 'classnames/bind'
import React, {useState} from 'react'
import titleAuth from '../../../assets/img/title.svg'
import styles from './slider.module.scss'

import {motion} from 'framer-motion'
import {useNavigate} from 'react-router-dom'

const cx = classNames.bind(styles)

export interface Content {
  id: number
  title: string
  description: string
  imageUrl: string
}

interface SliderProps {
  contents: Content[]
}

const Slider: React.FC<SliderProps> = ({contents}) => {
  const navigate = useNavigate()

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    if (currentIndex === contents.length - 1) {
      navigate('/verify')
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length)
    }
  }

  const handlePrev = () => {
    if (currentIndex === 0) {
      navigate(-1)
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + contents.length) % contents.length)
    }
  }

  return (
    <div className={cx('slider')}>
      <motion.div
        layout
        className={cx('content')}
        key={contents[currentIndex].id}
        initial={{x: 300, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        exit={{x: -300, opacity: 0}}
        transition={{duration: 0.5}}>
        <img
          src={contents[currentIndex].imageUrl}
          alt={contents[currentIndex].title}
          className="img"
        />

        <div className={cx('block')}>
          <div className={cx('title', `${currentIndex === 0 ? 'block__img' : ''}`)}>
            <h2 className={cx('title__desc')}>{contents[currentIndex].title}</h2>
            {currentIndex === 0 && (
              <img className={cx('title__img')} src={titleAuth} alt="Title auth" />
            )}
          </div>

          <div className={cx('desc')}>{contents[currentIndex].description}</div>
        </div>
      </motion.div>

      <div className={cx('controls')}>
        <button className={cx('back')} onClick={handlePrev}>
          <i className={cx('ico-arrow-uturn-left', 'back__icon')}></i>
        </button>

        <div className={cx('indicators')}>
          {contents.map((content, index) => (
            <span
              key={content.id}
              className={cx(`${currentIndex === index ? 'active' : ''}`)}></span>
          ))}
        </div>

        <button className={cx('next')} onClick={handleNext}>
          <i className={cx('ico-arrow-right', 'next__icon')}></i>
        </button>
      </div>
    </div>
  )
}

export default Slider
