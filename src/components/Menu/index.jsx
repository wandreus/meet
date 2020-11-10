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
  <S.Nav>
    <S.Ul itemscope itemtype="https://schema.org/SiteNavigationElement">
      {links.map(({ text, url }, key) => (
        <S.Li key={key} itemprop="name">
          <Link href={url}>
            <a itemProp="url">{text}</a>
          </Link>
        </S.Li>
      ))}
    </S.Ul>
  </S.Nav>
)

export default Menu
