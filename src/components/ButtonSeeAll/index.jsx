import * as S from './styles'
import Link from 'next/link'

import Button from '../Button'

const ButtonSeeAll = (props) => {
  const url = props?.url ? props?.url : '#'
  const callback = props?.callback ? props?.callback : () => ''

  return (
    <>
      <S.Wrapper>
        <Link href={url}>
          <a onClick={(e) => callback(e)}>
            <Button Small>ver todos</Button>
          </a>
        </Link>
      </S.Wrapper>
    </>
  )
}

export default ButtonSeeAll
