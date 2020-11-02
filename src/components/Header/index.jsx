import * as S from './styles'

import Menu from '../Menu'
import Logo from '../Logo'
import SocialNetwork from '../Social'

const Header = () => (
  <S.Header>
    <S.Container>
      <Logo />
      <Menu />
      <SocialNetwork />
    </S.Container>
  </S.Header>
)

export default Header
