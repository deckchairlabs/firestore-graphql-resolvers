export default collection => (parent, { id }, { firestore }) =>
  firestore
    .collection(collection)
    .doc(id)
    .get()
    .then(doc => ({ id, ...doc.data() }))
