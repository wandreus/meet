import HeadingPage from '.'

export default {
  title: 'Heading Page',
  component: HeadingPage,
  args: {
    label: 'Label Heading',
    BreadCrumb: 'home,category,Profile'
  }
}

export const Default = ({ BreadCrumb, label }) => {
  const arrayLink = BreadCrumb.split(',')?.map((item, i) => (
    <a key={i}>{item}</a>
  ))
  return <HeadingPage breadcrumb={arrayLink}>{label}</HeadingPage>
}
