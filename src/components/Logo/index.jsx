import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => (
  <S.Wrapper itemScope>
    <Link href="/">
      <a>
        <Image
          src="/img/logo.png"
          alt="Logo Marcar Meet Palestras"
          width={129}
          height={64}
          itemProp="Brand"
          priority
        />
      </a>
    </Link>
  </S.Wrapper>
)

export default Logo
