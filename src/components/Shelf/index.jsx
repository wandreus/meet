import React, { createRef } from 'react'
import Slider from 'react-slick'

import Arrow from '../Arrows'
import Card from '../Card'
import ButtonAll from '../ButtonSeeAll'

import * as S from './styles'

const Shelf = ({ list, base }) => {
  const customeSlider = createRef()

  const limit = 4
  const verify = list?.length > limit

  const sliderSettings = {
    infinite: false,
    speed: 1000,
    slidesToShow: limit,
    autoplay: true,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          infinite: true,
          centerPadding: '60px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 360,
        settings: {
          centerMode: true,
          infinite: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          centerMode: true,
          infinite: true,
          centerPadding: '30px',
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <>
      <S.Wrapper>
        {verify && (
          <Arrow
            callback={() => customeSlider.current.slickPrev()}
            data-direction="left"
            className="arrow"
          />
        )}
        <Slider {...sliderSettings} ref={customeSlider}>
          {list.map((item, key) => (
            <Card item={item} key={key} />
          ))}
        </Slider>
        {verify && (
          <Arrow
            callback={() => customeSlider.current.slickNext()}
            data-direction="right"
            className="arrow"
          />
        )}
      </S.Wrapper>
      <S.SeeAll>
        {base && <ButtonAll url={`/${base}/`}>ver todos</ButtonAll>}
      </S.SeeAll>
    </>
  )
}

export default Shelf
