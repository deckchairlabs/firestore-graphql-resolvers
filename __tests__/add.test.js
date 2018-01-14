const add = require('../src/add').default
const firestoreMock = require('../__mocks__/firestore')

let firestore = firestoreMock()
const COLLECTION_NAME = 'test-collection'

beforeEach(() => {
  firestore = firestoreMock()
})

test('returns a resolver function', () => {
  const resolver = add(COLLECTION_NAME)
  expect(typeof resolver).toBe('function')
})

test('adds a document to a collection', () => {
  const resolver = add(COLLECTION_NAME)
  const parent = {}
  const input = { id: 1, name: 'John' }
  const args = { input }
  const context = { firestore }

  resolver(parent, args, context)

  expect(firestore.collection).toBeCalledWith(COLLECTION_NAME)
  expect(firestore.add).toBeCalledWith(input)
})
