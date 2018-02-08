import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDgF_tW4mw74tDa9gHyy_y_L4s6ZI6wmxw",
    authDomain: "expensify-d5c85.firebaseapp.com",
    databaseURL: "https://expensify-d5c85.firebaseio.com",
    projectId: "expensify-d5c85",
    storageBucket: "expensify-d5c85.appspot.com",
    messagingSenderId: "703892276464"
};
firebase.initializeApp(config);
const database = firebase.database();



const expenses = [{
    description: ' d1',
    note: 'n1',
    amount: 0,
    createdAt: 0
},{
    description: ' d2',
    note: 'n2',
    amount: 10,
    createdAt: 10
},{
    description: ' d3',
    note: 'n3',
    amount: 20,
    createdAt: 20
}];

database.ref('expenses').on('child_removed',
    (snap) => {
        console.log(snap.key,snap.val());
    }
);

database.ref('expenses').on('child_changed',
    (snap) => {
        console.log(snap.key,snap.val());
    }
);

database.ref('expenses').on('child_added',
    (snap) => {
        console.log(snap.key,snap.val());
    }
);

database.ref('expenses').push( {
    description: expenses[0].description,
    note: expenses[0].note,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
});

// database.ref('expenses')
// .once('value')
// .then((snap) => {
//    const expenses = [];
//    snap.forEach((childSnap) => {
//        expenses.push({
//             id: childSnap.key,
//             ...childSnap.val()
//        });
//    });

//    console.log(expenses);

// });

// const OnValueChange = database.ref('expenses')
// .on("value", 
//     (snap) => {
//         const expenses = [];
//         snap.forEach( (childSnap) => {
//             expenses.push({
//                    id: childSnap.key,
//                    ...childSnap.val() 
//             });
//         });
//         console.log(expenses);
//     }, 
//     (e) => {
//         console.log('Error with data fetching', e);
//     }
// );



// database.ref('expenses').push( {
//     description: expenses[0].description,
//     note: expenses[0].note,
//     amount: expenses[0].amount,
//     createdAt: expenses[0].createdAt,
// });

// database.ref('expenses').push( {
//     description: expenses[1].description,
//     note: expenses[1].note,
//     amount: expenses[1].amount,
//     createdAt: expenses[1].createdAt,
// });

// database.ref('expenses').push( {
//     description: expenses[2].description,
//     note: expenses[2].note,
//     amount: expenses[2].amount,
//     createdAt: expenses[2].createdAt,
// });



// database.ref('notes/-L4fEs1WFisZg4yJA5k9').update({
//     body: 'Buy food'
// });

// database.ref('notes').push( {
//     title: 'Course topics',
//     body: 'Angular'
// });

//  const OnValueChange = database.ref().on("value", 
//   (snapshot)=>{
//       const val = snapshot.val();
//       console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//     }, (e) => {
//             console.log('Error with data fetching', e);
//     }
//   );


// setTimeout(()=> {
//     database.ref().update({
//             name: 'mike',
//            'job/company':'Kwikfit',
//            'job/title': 'Mechanic'
//         });
// }, 3500);

// setTimeout(()=> {
//     database.ref().update({
//         name: 'Andrew Mead',
//        'job/company':'Amazon',
//        'job/title': 'Software Developer'
//     });
// }, 7000);

// database.ref('location')
// .once('value')
// .then((snapshot)=>{
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e)=>{
//     console.log('Error etching data', e);
// });



// const OnValueChange = database.ref().on("value", 
// (snapshot)=>{
//     console.log(snapshot.val());
// }, (e) => {
//         console.log('Error with data fetching', e);
// }
// );
// setTimeout(()=> {
//     database.ref('age').set(29);
// }, 3500);
// setTimeout(()=> {
//     database.ref().off('value',OnValueChange);
// }, 7000);
// setTimeout(()=> {
//     database.ref('age').set(30);
// }, 10500);

// database.ref().set(
//       {
//           name:'Peter Ronald',
//           age: 26,
//           stressLevel: 6,
//           job: {
//               title: 'Software Developer',
//               company: 'Google'
//           },
//           location: {
//               city: 'Chichester',
//               country: 'England'
//           }
//       }
//   ).then(()=> {
//       console.log('Data is saved');
//   }).catch((e)=>{
//         console.log('This failed', e);
//   });


// database.ref().update({
//     stressLevel: 9,
//    'job/company':'Amazon',
//    'location/city': 'Seattle'
// });


// database.ref().remove()
//   .then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });