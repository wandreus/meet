import React from 'react'
import Link from 'next/link'
import * as S from './styles'
import Heading from 'components/Heading'

function ResultSeach({ list }) {
  return list.map((res, i) => (
    <S.Item key={i}>
      <Link href={`/palestrantes/${res?.url}`}>
        <a>
          <S.Info>
            <Heading H4>{res?.name}</Heading>
            <S.ShortDesc>{res?.short_description}</S.ShortDesc>
            <S.Themes>
              {res.theme.map((tm) => `#${tm.trim()}`).join(',')}
            </S.Themes>
          </S.Info>
          <S.Image>
            <img src={res?.img} alt={res?.name} />
          </S.Image>
        </a>
      </Link>
    </S.Item>
  ))
}

export default ResultSeach
