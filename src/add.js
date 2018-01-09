import get from './get'

export default collection => (parent, { input }, { firestore, ...context }) =>
  firestore
    .collection(collection)
    .add({ ...input })
    .then(docRef =>
      get(collection)(parent, { id: docRef.id }, { firestore, ...context })
    )
