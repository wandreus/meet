import Main from '../components/Main'
import Template from '../templates/Home'

//CREATE ROLE tuddu WITH LOGIN PASSWORD '@TuDdU2021';

export async function getStaticProps() {
  return {
    props: {
    }
  }
}

export default function Home(props) {
  return (
    <Main>
      <Template {...props} />
    </Main>
  )
}
