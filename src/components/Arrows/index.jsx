import React from 'react'

import * as S from './styles'

function Arrows(props) {
  const callback = props?.callback ? props?.callback : () => ({})

  const icon = (
    <svg width="16" height="29">
      <path d="M12.9555 0L16 3.32154L6.11066 14.1342L16 24.9469L12.9555 28.2684L0 14.1342L12.9555 0Z" />
    </svg>
  )

  const Button = (
    <S.Button {...props} onClick={(e) => callback(e)}>
      {icon}
    </S.Button>
  )

  const Light = (
    <>
      <S.Light {...props} onClick={(e) => callback(e)}>
        {icon}
      </S.Light>
    </>
  )

  const templates = {
    Button,
    Light
  }

  const [name] = Object.keys(props).filter((item) => templates[item])

  return templates[name] ? templates[name] : templates['Light']
}

export default Arrows
