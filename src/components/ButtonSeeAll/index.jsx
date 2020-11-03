import * as S from './styles'
import Link from 'next/link'

import Button from '../Button'

const ButtonSeeAll = ({ url }) => (
  <S.Wrapper>
    <Link href={url}>
      <a>
        <Button Small>ver todos</Button>
      </a>
    </Link>
  </S.Wrapper>
)

export default ButtonSeeAll
