const add = require('../src/add').default

test('returns a resolver function', () => {
  const resolver = add('test-collection')
  expect(typeof resolver).toBe('function')
})
