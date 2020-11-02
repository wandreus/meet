import * as S from './styles'
import Link from 'next/link'

const links = [
  {
    text: 'Home',
    url: '/'
  },
  {
    text: 'Quem somos',
    url: '/quem-somos'
  },
  {
    text: 'Palestrantes',
    url: '/palestrantes'
  },
  {
    text: 'Mestres de Cerimônias',
    url: '/mestres-de-cerimonias'
  },
  {
    text: 'Contato',
    url: '/contato'
  }
]

const Menu = () => (
  <S.Ul>
    {links.map(({ text, url }, key) => (
      <S.Li key={key}>
        <Link href={url}>
          <a>{text}</a>
        </Link>
      </S.Li>
    ))}
  </S.Ul>
)

export default Menu
