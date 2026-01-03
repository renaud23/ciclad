import { MenuItem } from '@components/layout/header/menu/MenuItem'
import { render } from '@testing-library/react'
import { createRoutesStub } from 'react-router'
import { describe, it } from 'vitest'

describe('MenuItem', () => {
  it('MenuItem rendering', () => {
    const Stub = createRoutesStub([
      {
        path: '/test',
        Component: () => (
          <MenuItem to="/" active={false} title="click me">
            Click me
          </MenuItem>
        ),
      },
    ])

    render(<Stub initialEntries={['/test']} />)
  })
})
