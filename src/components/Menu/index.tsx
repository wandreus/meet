import * as S from './styles'
import Link from 'next/link'

const Menu = () => (
  <S.Wrapper>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/mestres-de-cerimonias">
          <a>Mestres de Cerimônias</a>
        </Link>
      </li>
      <li>
        <Link href="/contato">
          <a>Contato</a>
        </Link>
      </li>
      <li>
        <Link href="/palestrantes">
          <a>Palestrantes</a>
        </Link>
      </li>
    </ul>
  </S.Wrapper>
)

export default Menu
