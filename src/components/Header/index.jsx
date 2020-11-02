import * as S from './styles'

import Container from '../Container'
import Menu from '../Menu'
import Logo from '../Logo'
import SocialNetwork from '../Social'

const Header = () => (
  <S.Header>
    <Container>
      <Logo />
      <Menu />
      <SocialNetwork />
    </Container>
  </S.Header>
)

export default Header
