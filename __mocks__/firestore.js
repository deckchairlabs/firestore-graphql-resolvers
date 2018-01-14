const resolvePromise = value => new Promise(() => value)

module.exports = () => {
  const collectionMock = jest
    .fn(() => ({
      add: addMock,
      get: getMock,
      doc: docMock
    }))
    .mockName('collection')

  const addMock = jest.fn().mockName('add')
  const getMock = jest.fn().mockName('get')
  const setMock = jest.fn().mockName('set')
  const docMock = jest
    .fn(() => ({
      collection: collectionMock,
      get: getMock,
      set: setMock
    }))
    .mockName('doc')

  addMock.mockImplementation(resolvePromise)
  getMock.mockImplementation(resolvePromise)
  setMock.mockImplementation(resolvePromise)

  return {
    collection: collectionMock,
    add: addMock,
    get: getMock,
    doc: docMock,
    set: setMock
  }
}
