import { useState } from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

import * as S from './styles'
import Container from 'components/Container'
import HeadingPage from 'components/HeadingPage'
import Titulo from 'components/TituloSection'
import Heading from 'components/Heading'
import Input from 'components/Input'
import Button from 'components/Button'
import Loading from 'components/Loading'

const ContatoPage = () => {
  const [useLoading, setLoading] = useState(false)

  async function sendEmail(e) {
    e.preventDefault()
    setLoading(true)

    const send = await emailjs.sendForm(
      'service_wrrpido',
      'template_flhd3ug',
      e.target,
      'user_J4mccUHMO70u9iMMznZMy'
    )

    try {
      send.text

      Swal.fire({
        icon: 'success',
        title: 'Enviado com sucesso',
        html:
          'Obrigado por entrar em contato conosco! <br/> Responderemos assim que possivel'
      })

      setLoading(false)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Tente novamente',
        html: error
      })
    }
  }

  return (
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

        <S.Body>
          <S.Form onSubmit={(e) => sendEmail(e)}>
            <S.Title>Você pode chamar por aqui...</S.Title>
            <Input type="text" name="name" placeholder="Seu Nome" required />
            <Input
              type="text"
              name="phone"
              placeholder="Seu Telefone"
              required
            />
            <Input type="email" name="email" placeholder="Seu email" required />
            <Input
              Textarea
              name="message"
              placeholder="Sua Mensagem"
              required
            />

            <Button>{useLoading ? <Loading /> : 'Enviar Mensagem'}</Button>
          </S.Form>
          <S.Info>
            <S.Title>
              Nosso time está pronto para te ouvir, te orientar e tirar todas as
              suas dúvidas.
            </S.Title>
            <S.Description>
              Fique a vontade para nos contar um pouco mais sobre o seu evento.
            </S.Description>
            <S.Contact>
              <S.SubTitle>Nossos Contatos</S.SubTitle>
              <S.Ul>
                <S.Li itemprop="tel" itemscope>
                  <svg width="20" height="21">
                    <path d="M8.8614 6.33888C9.3795 5.64067 9.56529 4.90482 8.97932 4.25529C7.66437 2.41531 6.78003 1.27747 6.22533 0.729514C5.17077 -0.312219 3.436 -0.171309 2.52267 0.728624C2.03212 1.21199 1.86604 1.37797 1.36235 1.88959C-1.4433 4.69674 0.267729 10.631 4.81627 15.184C9.36378 19.736 15.2975 21.4479 18.109 18.6348C18.5738 18.1867 18.9673 17.793 19.2777 17.465C20.1727 16.5189 20.3086 14.8607 19.2718 13.7834C18.7402 13.2311 17.6552 12.3894 15.7378 11.0179C15.1506 10.4928 14.4543 10.6066 13.8159 11.0254C13.5089 11.2269 13.2854 11.4307 12.8634 11.853L12.0972 12.6197C11.9963 12.7207 10.6259 12.0344 9.2956 10.7028C7.9646 9.37051 7.27878 8.00004 7.37923 7.89959L8.146 7.1324C8.27988 6.99839 8.34388 6.93351 8.42596 6.84725C8.59697 6.66752 8.73856 6.50441 8.8614 6.33888ZM13.5106 14.0339L14.277 13.2671C14.5092 13.0346 14.6597 12.8917 14.7822 12.7932C16.4618 13.9994 17.4346 14.7578 17.8319 15.1707C18.0705 15.4185 18.0334 15.8708 17.8261 16.09C17.5391 16.3934 17.1662 16.7664 16.7086 17.2078C14.8906 19.0266 10.1008 17.6447 6.23001 13.7701C2.35803 9.89429 0.976766 5.10377 2.78108 3.29846C3.28274 2.78895 3.44168 2.63009 3.92524 2.15363C4.10654 1.97498 4.6004 1.93487 4.82096 2.15274C5.24802 2.57461 6.04022 3.58897 7.20559 5.21231C7.14526 5.28721 7.06991 5.37185 6.97821 5.46822C6.91091 5.53895 6.85484 5.59579 6.73226 5.71849L5.96624 6.48493C4.66309 7.78797 5.7729 10.0057 7.88186 12.1167C9.98936 14.2263 12.2079 15.3373 13.5106 14.0339Z" />
                  </svg>
                  <span itemProp="value">
                    +55 11 97227-9606 / 99839-6847 <br />
                    +55 11 2359-9998 / 30970688
                  </span>
                </S.Li>
                <S.Li itemscope>
                  <a
                    itemProp="url"
                    href={`mailto:comercial@meetpalestras.com.br`}
                  >
                    <svg width="21" height="20">
                      <path d="M20.9895 7.36842C20.9895 6.61053 20.601 5.94737 20.0025 5.57895L10.5 0L0.9975 5.57895C0.399 5.94737 0 6.61053 0 7.36842V17.8947C0 19.0526 0.945 20 2.1 20H18.9C20.055 20 21 19.0526 21 17.8947L20.9895 7.36842ZM19.1511 7.36843V7.37896L10.7361 12.6316L2.3107 7.36843L10.7361 2.44212L19.1511 7.36843ZM2.3107 9.8316V17.8948H19.1616L19.1511 9.86318L10.7361 15.1158L2.3107 9.8316Z" />
                    </svg>
                    <span itemProp="email">comercial@meetpalestras.com.br</span>
                  </a>
                </S.Li>
              </S.Ul>
            </S.Contact>
          </S.Info>
        </S.Body>
      </Container>
    </S.Wrapper>
  )
}

export default ContatoPage
