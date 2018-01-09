export default collection => (parent, args, { firestore }) =>
  firestore
    .collection(collection)
    .get()
    .then(function(querySnapshot) {
      const documents = []
      querySnapshot.forEach(doc =>
        documents.push({ id: doc.id, ...doc.data() })
      )
      return documents
    })
