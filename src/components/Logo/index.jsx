import * as S from './styles'
import Link from 'next/link'

const Logo = () => (
  <S.Wrapper itemScope>
    <Link href="/">
      <a>
        <img
          src="/img/logo.png"
          alt="Logo Marcar Meet Palestras"
          width={129}
          height={64}
          itemProp="Brand"
        />
      </a>
    </Link>
  </S.Wrapper>
)

export default Logo
