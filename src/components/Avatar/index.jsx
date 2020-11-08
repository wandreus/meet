import * as S from './styles'
import Img from 'next/image'
const Avatar = (props) => (
  <S.Wrapper>
    <Img {...props} />
  </S.Wrapper>
)

export default Avatar
