import * as S from './styles'
import { useState } from 'react'

import Container from '../Container'
import Menu from '../Menu'
import Logo from '../Logo'
import SocialNetwork from '../Social'

const Header = () => {
  const [useNav, setNav] = useState(false)

  return (
    <S.Header>
      <Container>
        <Logo />
        <S.ContainerNav className={useNav && 'js-open'}>
          <S.Icon className="icon" onClick={() => setNav((use) => !use)} />
          <Menu />
          <SocialNetwork />
        </S.ContainerNav>
      </Container>
    </S.Header>
  )
}

export default Header
