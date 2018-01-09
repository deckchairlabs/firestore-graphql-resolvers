const remove = require('../src/remove').default

test('returns a resolver function', () => {
  const resolver = remove('test-collection')
  expect(typeof resolver).toBe('function')
})
