import React, { createRef } from 'react'
import Slider from 'react-slick'

import Arrow from '../Arrows'
import Card from '../Card'
import Button from '../ButtonSeeAll'

import * as S from './styles'

const Shelf = ({ list, base }) => {
  const customeSlider = createRef()

  const limit = 4
  const verify = list.length > limit

  const sliderSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: limit,
    autoplay: true,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  }

  return (
    <>
      <S.Wrapper>
        {verify && (
          <Arrow
            name="Light"
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
            name="Light"
            callback={() => customeSlider.current.slickNext()}
            data-direction="right"
            className="arrow"
          />
        )}
      </S.Wrapper>
      <S.SeeAll>
        <Button url={`/${base}/`} />
      </S.SeeAll>
    </>
  )
}

export default Shelf
