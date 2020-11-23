import BannerTv from '.'

export default {
  title: 'BannerTv',
  component: BannerTv
}

export const Default = () => {
  const mock = [
    {
      desk: '/img/slide-desk-1.png',
      mobile: '/img/slide-mobile-1.png',
      alt: 'OS MELHORES PALESTRANTES E MESTRES DE CERIMÔNIA',
      url: '/mestres-de-cerimonias'
    },
    {
      desk: '/img/slide-desk-2.png',
      mobile: '/img/slide-mobile-2.png',
      alt: 'OS MELHORES PALESTRANTES E MESTRES DE CERIMÔNIA',
      url: '/palestrantes'
    }
  ]
  return <BannerTv list={mock} />
}
