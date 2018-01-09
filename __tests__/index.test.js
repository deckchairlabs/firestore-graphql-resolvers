const index = require('../src/index').default

test('returns exported resolver factory functions', () => {
  ;['list', 'get', 'add', 'update', 'remove'].forEach(resolver => {
    expect(typeof index[resolver]).toBe('function')
  })
})
