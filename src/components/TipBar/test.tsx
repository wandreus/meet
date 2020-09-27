import { render, screen } from '@testing-library/react'

import TipBar from '.'

describe('<TipBar />', () => {
  it('should render the heading', () => {
    const { container } = render(<TipBar />)

    expect(screen.getByRole('heading', { name: /TipBar/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
