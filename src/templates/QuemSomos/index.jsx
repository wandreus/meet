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
          A <em>Meet Palestras</em> surgiu da experiência de mercado e da
          vontade de empreender. <br />
          Acreditamos no aprimoramento das corporações, através de
          <em>palestras</em>, treinamento e workshops. <br />
          Nossa equipe está disponível para levar no seu evento o
          <em>Palestrante</em>, MC, Mediador com o perfil desejado,
          <br /> buscando Inspirar, Motivar, Capacitar, Provocar e Engajar seu
          público e clientes. <br />
          Os eventos podem ser Presenciais, Online e Híbridos, buscando
          atualmente práticas mais assertivas.
        </p>
        <br></br>
        <Heading H2>Nossa Missão</Heading>
        <p>
          A Meet Palestra quer levar mais conhecimento e satisfação para o seu
          evento! <br />
          Buscamos sempre entregar ao público, conteúdos relevantes e atuais,
          visando a melhor negociação
          <br /> para que você tenha em seu evento o profissional de sua
          preferência. <br />
          Atender bem aos clientes e parceiros é o nosso objetivo.
        </p>
      </S.body>
    </Container>
  </S.Wrapper>
)

export default QuemSomos
