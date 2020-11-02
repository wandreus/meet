import Link from 'next/link'
import { palestrantes } from '../../public/palestrantes.json'
import Main from 'components/Main'

export async function getStaticProps() {
  const path = palestrantes[0]
  const prop = path?.filter(({ type }) => type == 'Palestrante')
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
              <Link href={`/palestrantes/${url}`}>
                <a>{name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </Main>
  )
}
