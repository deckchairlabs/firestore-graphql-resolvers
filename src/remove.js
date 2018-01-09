import get from './get'

export default collection => (parent, { id }, { firestore, ...context }) => {
  const ref = firestore.collection(collection).doc(id)

  return get(collection)(parent, { id }, { firestore, ...context }).then(doc =>
    ref.delete().then(() => {
      return doc
    })
  )
}
