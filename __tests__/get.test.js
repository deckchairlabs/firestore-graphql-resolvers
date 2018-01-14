const get = require('../src/get').default
const firestoreMock = require('../__mocks__/firestore')

let firestore = firestoreMock()
const COLLECTION_NAME = 'test-collection'

beforeEach(() => {
  firestore = firestoreMock()
})

test('returns a resolver function', () => {
  const resolver = get('test-collection')
  expect(typeof resolver).toBe('function')
})

test('gets a document from a collection', () => {
  const id = 'my-test-doc-id'
  const resolver = get(COLLECTION_NAME)
  const parent = {}
  const args = { id }
  const context = { firestore }

  resolver(parent, args, context)

  expect(firestore.collection).toBeCalledWith(COLLECTION_NAME)
  expect(firestore.doc).toBeCalledWith(id)
  expect(firestore.get).toBeCalled()
})
