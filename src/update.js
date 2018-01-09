import get from './get'

export default collection => (
  parent,
  { id, input },
  { firestore, ...context }
) =>
  firestore
    .collection(collection)
    .doc(id)
    .set({ ...input })
    .then(() => {
      return get(collection)(parent, { id }, { firestore, ...context })
    })
