const functions = require('firebase-functions');
const admin = require('firebase-admin');//※1 Admin SDK について


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp();
const firestore = admin.firestore();

exports.onAddMessage = functions.firestore
  .document('messages/{messageId}')
  .onCreate((snap, context) => {
    const data = snap.data();
    if(data.type === 'u') {
      const message = {
        uid: data.uid,
        cid: data.cid,
        type: 'b',
        content: data.content + 'でやんす',
        createdAt: Date.now()
      }
      firestore.collection('messages').add(message)
    }
    return 0;
  });
