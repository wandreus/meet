import { render, screen } from '@testing-library/react'

import Minicart from '.'

describe('<Minicart />', () => {
  it('should render the heading', () => {
    const { container } = render(<Minicart />)

    expect(
      screen.getByRole('heading', { name: /Minicart/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
