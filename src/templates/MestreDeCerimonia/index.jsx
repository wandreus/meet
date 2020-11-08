import * as S from './styles'

import Container from 'components/Container'
import HeadingPage from 'components/HeadingPage'
import Titulo from 'components/TituloSection'
import Heading from 'components/Heading'
import Shelf from 'components/Shelf'
import Search from 'components/Search'
import Result from 'components/Result'

const Palestrantes = ({ Speakers, spotlight, themes }) => (
  <>
    <Container>
      <HeadingPage breadcrumb={<a href="/">home</a>}>
        Mestres de Cerimônias
      </HeadingPage>
    </Container>

    <S.Spotlight>
      <Container>
        <Titulo>O maior time de mestres</Titulo>
        <Heading H3>OS MAIORES NOMES DO BRASIL</Heading>
        <Shelf list={spotlight} />
      </Container>
    </S.Spotlight>

    <S.Body>
      <Container>
        <Titulo>Veja nosso time completo</Titulo>
        <Heading H3>PROCURANDO POR ALGUEM ESPECÍFICO ?</Heading>
        <Search list={Speakers} />
        <Heading H3>
          FILTRE POR TEMAS PARA ENCONTRAR SEU PALESTRENTE IDEAL
        </Heading>
        <Result list={{ Speakers, themes }} />
      </Container>
    </S.Body>
  </>
)

export default Palestrantes
