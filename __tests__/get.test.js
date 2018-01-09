const get = require('../src/get').default

test('returns a resolver function', () => {
  const resolver = get('test-collection')
  expect(typeof resolver).toBe('function')
})
