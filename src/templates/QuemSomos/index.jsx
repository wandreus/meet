import * as S from './styles'
import Container from 'components/Container'
import HeadingPage from 'components/HeadingPage'
import Heading from 'components/Heading'

const QuemSomos = () => (
  <S.Wrapper>
    <Container>
      <HeadingPage breadcrumb={<a href="/">home</a>}>Quem Somos</HeadingPage>
      <S.body>
        <p>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
          sobreviveu não só a cinco séculos, como também ao salto para a
          editoração eletrônica, permanecendo essencialmente inalterado. Se
          popularizou na década de 60, quando a Letraset lançou decalques
          contendo passagens de Lorem Ipsum, e mais recentemente quando passou a
          ser integrado a softwares de editoração eletrônica como Aldus
          PageMaker. Lorem Ipsum é simplesmente uma simulação de texto da
          indústria tipográfica e de impressos, e vem sendo utilizado desde o
          século XV
        </p>
        <br></br>
        <Heading H2>Nossa Missão</Heading>
        <p>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
          sobreviveu não só a cinco séculos, como também ao salto para a
          editoração eletrônica, permanecendo essencialmente inalterado. Se
          popularizou na década de 60, quando a Letraset lançou decalques
          contendo passagens de Lorem Ipsum, e mais recentemente quando passou a
          ser integrado a softwares de editoração eletrônica como Aldus
          PageMaker.
        </p>
      </S.body>
    </Container>
  </S.Wrapper>
)

export default QuemSomos
