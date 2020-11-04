import * as S from './styles'
import Link from 'next/link'
import Image from 'next/image'

import Container from '../../components/Container'
import BannerTv from '../../components/Slider'
import Button from '../../components/Button'
import Titulo from '../../components/TituloSection'
import Shelf from '../../components/Shelf'

const Home = ({ Speakers, Master, banners }) => (
  <>
    <BannerTv list={banners} />
    <S.Wrapper>
      <Container>
        <S.ColumnLeft>
          <S.Title>POR ONDE COMEÇAR?</S.Title>
          <S.Highlight>
            Como escolher o <em>Palestrante</em> Ideal
          </S.Highlight>
          <S.SubTitle>Lorem Ipsum é simplesmente</S.SubTitle>
          <S.Text>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
              os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
              sobreviveu não só a cinco séculos, como também ao salto para a
              editoração eletrônica, permanecendo essencialmente inalterado. Se
              popularizou na década de 60, quando a Letraset lançou decalques
              contendo passagens de Lorem Ipsum, e mais recentemente quando
              passou a ser integrado a softwares de editoração eletrônica como
              Aldus PageMaker.
            </p>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
              os embaralhou para fazer um livro de modelos de tipos.
            </p>
          </S.Text>
        </S.ColumnLeft>

        <S.ColumnRight>
          <S.Title>A MEET VAI TE AJUDAR</S.Title>
          <S.Text>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido.
            </p>
          </S.Text>
          <Link href="/contato">
            <a>
              <Button Contact>Entre em contato conosco</Button>
            </a>
          </Link>
          <S.img>
            <Image
              src="/img/avatar-home.png"
              alt="Ilustração - Mulher e homen sentados pesquisando um palestrante"
              title="Ilustração - Mulher e homen sentados pesquisando um palestrante"
              width={346}
              height={258}
              quality="100"
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
