const list = require('../src/list').default

test('returns a resolver function', () => {
  const resolver = list('test-collection')
  expect(typeof resolver).toBe('function')
})
