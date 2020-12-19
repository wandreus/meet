import React, { createRef } from 'react'
import Slider from 'react-slick'
import Link from 'next/link'

import Arrow from '../Arrows'

import * as S from './styles'

function BannerTv({ list: banners }) {
  const customeSlider = createRef()
  const valid = banners.length > 1
  const desk = banners.filter(({ desk }) => desk)
  const mobile = banners.filter(({ mobile }) => mobile)

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
      {valid && (
        <Arrow
          Button
          callback={() => customeSlider.current.slickPrev()}
          data-direction="left"
          className="arrow"
        />
      )}
      <Slider className="desk" {...sliderSettings} ref={customeSlider}>
        {desk?.map(({ desk, alt, url }, key) =>
          url ? (
            <Link href={url} key={`D${key}`}>
              <a>
                <img src={desk} alt={alt} width={1920} height={470} />
              </a>
            </Link>
          ) : (
            <img
              src={desk}
              key={`D${key}`}
              alt={alt}
              width={1920}
              height={470}
            />
          )
        )}
      </Slider>
      <Slider className="mobile" {...sliderSettings}>
        {mobile?.map(({ mobile, alt, url }, key) =>
          url ? (
            <Link href={url} key={`M${key}`}>
              <a>
                <img src={mobile} alt={alt} />
              </a>
            </Link>
          ) : (
            <img src={mobile} alt={alt} key={`M${key}`} />
          )
        )}
      </Slider>
      {valid && (
        <Arrow
          Button
          callback={() => customeSlider.current.slickNext()}
          data-direction="right"
          className="arrow"
        />
      )}
    </S.Wrapper>
  )
}

export default BannerTv
