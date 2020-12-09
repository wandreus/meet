import * as S from './styles'
import Link from 'next/link'

import Container from 'components/Container'
import BannerTv from 'components/Slider'
import Button from 'components/Button'
import Titulo from 'components/TituloSection'
import Shelf from 'components/Shelf'

const Home = ({ Speakers, Master, banners }) => (
  <>
    <BannerTv list={banners} />
    <S.Wrapper>
      <Container>
        <S.ColumnLeft>
          <S.Title>POR ONDE COMEÇAR?</S.Title>
          <S.Highlight>
            Como escolher o <br />
            <em>Palestrante</em> Ideal
          </S.Highlight>
          <S.SubTitle>A Meet Palestras promove a capacitação</S.SubTitle>
          <S.Text>
            <p>
              Nós da Meet realizamos uma busca qualificada pelos
              <em> palestrante</em> com o perfil do seu evento, A Meet sabe que
              sua empresa e equipe precisam de resultados, com conteúdo e
              performance.
            </p>
            <p>
              Estamos preparados para sugerir e indicar o <em>palestrante</em>
              ideal .
              <br />
              Nós queremos Motivar, Estimular, Emocionar e Transformar o seu
              evento.
            </p>
          </S.Text>
        </S.ColumnLeft>

        <S.ColumnRight>
          <S.Title>A MEET VAI TE AJUDAR</S.Title>
          <S.Text>
            <p>
              A Meet quer agilizar seu processo de contratação, atendendo sua
              necessidade com competência.
            </p>
          </S.Text>
          <Link href="/contato">
            <a>
              <Button Contact>Entre em contato conosco</Button>
            </a>
          </Link>
          <S.img>
            <img
              src="/img/avatar-home.png"
              alt="Ilustração - Mulher e homen sentados pesquisando um palestrante"
              title="Ilustração - Mulher e homen sentados pesquisando um palestrante"
              width={346}
              height={258}
            />
          </S.img>
        </S.ColumnRight>
      </Container>
    </S.Wrapper>

    <S.Speakers>
      <Container>
        <Titulo>Palestrantes</Titulo>
        <Shelf base="palestrantes" list={Speakers} />
      </Container>
    </S.Speakers>

    <S.Masters>
      <Container>
        <Titulo>Mestres de Cerimônias</Titulo>
        <Shelf base="mestres-de-cerimonias" list={Master} />
      </Container>
    </S.Masters>
  </>
)

export default Home
