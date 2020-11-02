import * as S from './styles'
import Header from '../Header'
import Footer from '../Footer'

const Main = ({ children }) => (
  <S.Wrapper>
    <Header />
    {children}
    <Footer />
  </S.Wrapper>
)

export default Main
