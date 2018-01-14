const list = require('../src/list').default
const firestoreMock = require('../__mocks__/firestore')

let firestore = firestoreMock()
const COLLECTION_NAME = 'test-collection'

test('returns a resolver function', () => {
  const resolver = list(COLLECTION_NAME)
  expect(typeof resolver).toBe('function')
})

test('gets all documents from a collection', () => {
  const resolver = list(COLLECTION_NAME)
  const parent = {}
  const args = {}
  const context = { firestore }

  resolver(parent, args, context)

  expect(firestore.collection).toBeCalledWith(COLLECTION_NAME)
  expect(firestore.get).toBeCalled()
})
