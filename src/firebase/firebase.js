import * as firebase from 'firebase';

//import moment from 'moment';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp( config );

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_remove
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val() );
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log('changed ' + snapshot.key, snapshot.val() );
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log('added ' + snapshot.key, snapshot.val() );
// });

// database.ref("expenses").push({
//     description: 'Pay Rent123',
//     note: 'Pay rent',
//     amount: 14000,
//     createdAt: 0
// });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val(),
//             });
//         });

//         console.log(expenses);
//     });

// database.ref("expenses").push({
//     description: 'Water Bill',
//     note: 'water bill',
//     amount: 50,
//     createdAt: 40000
// });

// database.ref("expenses").push({
//     description: 'Electric Bill',
//     note: 'Electric Bill',
//     amount: 145.50,
//     createdAt: -394893
// });

//database.ref('notes/-L-Pfcg01yDsoN1J5QOQ').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//     notes:{
//         asdf234sdf: {
//             title: 'First note',
//             body: 'This is my note'
//         },
//         adsf345tydfasg: {
//             title: 'Second note',
//             body: 'This is my note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'This is my note'
// }, {
//     id: '14',
//     title: 'Second note',
//     body: 'This is my note'
// }];

// database.ref('notes').set( notes );

// const onValueChange = database.ref().on( 'value', ( snapshot ) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

//  const onValueChange = database.ref().on('value', ( snapshot ) => {
//     console.log('snapshot data: ', snapshot.val() );
// }, ( e) => {
//     console.log('Error with data fetching ', e );
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off( onValueChange );
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then(( snapshot ) => {
//         console.log('snapshot data', snapshot.val() );
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e );
//     })
    
// database.ref().set({
//     name: 'Felix II Rigor',
//     age: 38,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     stressLevel: 6,
//     location: {
//         city: 'Petaling Jaya 1',
//         country: 'Malaysia'
//     }
// }).then(() => {
//     console.log('data set ' );
// }).catch((error) => {
//     console.log('error', error );
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });


// database.ref().update({
//     job: 'Manager',
//     'location/city': 'Boston'
// });

// // database.ref('age').set(27);
// // database.ref('location/city').set('Manila');
// database.ref('attributes').set({
//     height: "5'6\"",
//     weight: "90kg"
// }).then(() => {
//     console.log('data set again');
// }).catch((e) => {
//     console.log('error again', e );
// });


// database.ref('isSingle').remove()
//     .then(() => {
//         console.log('remove successfull');
//     })
//     .catch((e) => {
//         console.log( 'remove error', e);
//     });

// database.ref('isSingle').set( null );

