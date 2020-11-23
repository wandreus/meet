import Main from '.'
import Container from 'components/Container'
import HeadingPage from 'components/HeadingPage'

export default {
  title: 'Main',
  component: Main,
  args: {
    bread: 'home',
    title: 'Title your page'
  }
}

export const Default = ({ bread, title }) => {
  const breadcrumb = bread.split(',')?.map((item, i) => <a key={i}>{item}</a>)
  return (
    <Main>
      <Container>
        <HeadingPage breadcrumb={breadcrumb}>{title}</HeadingPage>
      </Container>
    </Main>
  )
}

export const Basic = () => <Main />
