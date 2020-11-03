import Link from 'next/link'
import { palestrantes } from '../../public/palestrantes.json'

import Main from 'components/Main'

export async function getStaticProps() {
  const path = palestrantes[0]
  const prop = path?.filter(({ type }) => type == 'Mestres de Cerimônias')
  return {
    props: {
      prop
    }
  }
}

export default function mestrePage({ prop }) {
  return (
    <Main>
      <ul>
        {prop.map(({ name, url }, i) => {
          return (
            <li key={i}>
              <Link href={`/mestres-de-cerimonias/${url}`}>
                <a>{name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </Main>
  )
}
