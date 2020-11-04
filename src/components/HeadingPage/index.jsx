import * as S from './styles'
import Breadcrumb from 'components/Breadcrumb'
import Heading from 'components/Heading'

const HeadingPage = ({ breadcrumb, children }) => (
  <S.Wrapper>
    {breadcrumb && <Breadcrumb>{breadcrumb}</Breadcrumb>}
    {children && <Heading>{children}</Heading>}
  </S.Wrapper>
)

export default HeadingPage
