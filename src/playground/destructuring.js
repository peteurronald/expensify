// const person = {
// //  name:'Peter',
//  age:26,
//  location: {
//      city: 'Chichester',
//      temp: 84
//  }
// };

// //const name = person.name;
// //const ag = person.age;

// const {name: firstname = 'Anon', age} = person;
// console.log(`${firstname} is ${age}.`);

// const {city, temp:temperature} = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city} `)
// }


// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan',
//     publisher: {
//         //name: 'Penguin'

//     }
// }

// const {name:publisherName = "Self-published"} = book.publisher

// console.log(`Publishers name is ${publisherName}`);


const address = ['4 Windsor Road',' Chichester', 'West Sussex', 'PO19 7XF'];
const [, city, county = "Surrey"] = address;

console.log(`You are in ${city} ${county} `);


const item = ['coffee (hot)', '£2','£3','£4'];
const [product, smallPrice, mediumPrice, largePrice] = item;
console.log(`A medium ${product} costs ${mediumPrice}`);