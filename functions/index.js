const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)
const db = admin.firestore()

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello Have An Idea");
});


exports.addUserInFirestore = functions.auth.user().onCreate((user) => {
    return admin.auth().getUser(user.uid)
    .then((userRecord) =>{
        console.log(db)
        const userCollection = db.collection('users');
        return userCollection.doc(userRecord.uid).set({
            firstName: userRecord.displayName.split(' ')[0],
            lastName: userRecord.displayName.split(' ')[1],
            email:userRecord.email,
            createdAt:userRecord.metadata.creationTime,
            iscompleted:false
        })
        .then((userAdded) => userAdded )
        .catch((err) => err)
    })


});

