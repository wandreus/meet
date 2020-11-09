import * as S from './styles'
import Container from 'components/Container'
import HeadingPage from 'components/HeadingPage'
import Titulo from 'components/TituloSection'
import Heading from 'components/Heading'

const ContatoPage = () => (
  <S.Wrapper>
    <Container>
      <HeadingPage breadcrumb={<a href="/">home</a>}>Contato</HeadingPage>
      <S.Header>
        <Titulo>Vamos conversar?</Titulo>
        <Heading H3>
          Preencha nosso formulário e retornaremos <br />
          seu contato o mais breve possível.
        </Heading>
      </S.Header>
      <S.Body>asa</S.Body>
    </Container>
  </S.Wrapper>
)

export default ContatoPage
