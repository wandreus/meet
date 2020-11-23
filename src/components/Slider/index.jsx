import React, { createRef } from 'react'
import Slider from 'react-slick'
import Link from 'next/link'

import Arrow from '../Arrows'

import * as S from './styles'

function BannerTv({ list: banners }) {
  const customeSlider = createRef()

  const sliderSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  }

  return (
    <S.Wrapper>
      <Arrow
        Button
        callback={() => customeSlider.current.slickPrev()}
        data-direction="left"
        className="arrow"
      />
      <Slider className="desk" {...sliderSettings} ref={customeSlider}>
        {banners?.map(({ desk, alt, url }, key) => (
          <Link href={url} key={key}>
            <a>
              <img src={desk} alt={alt} width={1920} height={470} />
            </a>
          </Link>
        ))}
      </Slider>
      <Slider className="mobile" {...sliderSettings}>
        {banners?.map(({ mobile, alt, url }, key) => (
          <Link href={url} key={key}>
            <a>
              <img src={mobile} alt={alt} />
            </a>
          </Link>
        ))}
      </Slider>
      <Arrow
        Button
        callback={() => customeSlider.current.slickNext()}
        data-direction="right"
        className="arrow"
      />
    </S.Wrapper>
  )
}

export default BannerTv
