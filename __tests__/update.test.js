const update = require('../src/update').default
const firestoreMock = require('../__mocks__/firestore')

let firestore = firestoreMock()
const COLLECTION_NAME = 'test-collection'

test('returns a resolver function', () => {
  const resolver = update(COLLECTION_NAME)
  expect(typeof resolver).toBe('function')
})

test('updates a documents in the collection', () => {
  const id = 'my-test-doc-id'
  const input = { name: 'Testing' }
  const resolver = update(COLLECTION_NAME)
  const parent = {}
  const args = { id, input }
  const context = { firestore }

  resolver(parent, args, context)

  expect(firestore.collection).toBeCalledWith(COLLECTION_NAME)
  expect(firestore.doc).toBeCalledWith(id)
  expect(firestore.set).toBeCalledWith(input)
})
