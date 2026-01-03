import { describe, expect, test } from 'vitest'

import { classNames } from './classNames'

describe('Test classNames', () => {
  test('toto', () => {
    expect(classNames('toto')).toBe('toto')
  })
  test('{toto: true}', () => {
    expect(classNames({ tutu: true })).toBe('tutu')
  })
  test('toto tutu', () => {
    expect(classNames('toto', 'tutu')).toBe('toto tutu')
  })
  test('toto tutu { titi: true }', () => {
    expect(classNames('toto', 'tutu', { titi: true })).toBe('toto tutu titi')
  })
  test('toto tutu { titi: true ,tata:true ,bob:false}', () => {
    expect(
      classNames('toto', 'tutu', { titi: true, tata: true, bob: false }),
    ).toBe('toto tutu titi tata')
  })
})
