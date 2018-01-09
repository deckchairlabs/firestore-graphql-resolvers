const update = require('../src/update').default

test('returns a resolver function', () => {
  const resolver = update('test-collection')
  expect(typeof resolver).toBe('function')
})
