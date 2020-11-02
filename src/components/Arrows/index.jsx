import React from 'react'

import * as S from './styles'

function Arrows(props) {
  const callback = props?.callback ? props?.callback : () => ({})
  const name = props?.name
  const verify = ['name', 'children', 'callback']

  const icon = (
    <svg width="16" height="29">
      <path d="M12.9555 0L16 3.32154L6.11066 14.1342L16 24.9469L12.9555 28.2684L0 14.1342L12.9555 0Z" />
    </svg>
  )

  let newprops = {}
  Object.keys(props).map((item) => {
    if (!verify.find((el) => el == item)) newprops[item] = props[item]
  })

  const Button = (
    <S.Button {...newprops} onClick={(e) => callback(e)}>
      {icon}
    </S.Button>
  )

  const Light = (
    <>
      <S.Light {...newprops} onClick={(e) => callback(e)}>
        {icon}
      </S.Light>
    </>
  )

  const templates = {
    Button,
    Light
  }

  return templates[name] ? templates[name] : templates['Light']
}

export default Arrows
