import get from './get'

export default collection => (parent, { input }, { firestore, ...context }) =>
  firestore
    .collection(collection)
    .add({ ...input })
    .then(({ id }) =>
      get(collection)(parent, { id }, { firestore, ...context })
    )
