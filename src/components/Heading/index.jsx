import React from 'react'
import * as S from './styles'

function Heading(props) {
  const children = props?.children

  const H1 = <S.H1 {...props}>{children}</S.H1>

  const H2 = <S.H2 {...props}>{children}</S.H2>

  const H3 = <S.H3 {...props}>{children}</S.H3>

  const H4 = <S.H4 {...props}>{children}</S.H4>

  const templates = {
    H1,
    H2,
    H3,
    H4
  }

  const [name] = Object.keys(props).filter((item) => templates[item])

  return templates[name] ? templates[name] : templates['H1']
}

export default Heading
