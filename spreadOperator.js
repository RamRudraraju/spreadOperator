const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

/* const arr3 = [...arr1, ...arr2];

console.log('arr3', arr3); */

/* const arr3 = arr1.slice(); */ // Regular Way

const arr3 = [...arr1];  // By usng this spread operator. It will create a new copy. 
                         // Without it will just create a Reference. 

arr3.push(6);

console.log('arr1', arr1);
console.log('arr3', arr3);


const userOne = {
  name: 'David',
  age: 22,
  city: 'Salt Lake City',
  country: 'USA'
};

/* const userTwo = {};      // Regular Way
Object.assign(userTwo, userOne);
userTwo.name = 'John'; */

const userTwo = {...userOne, name: 'John', gender: 'male'}; // By usng this spread operator. It will create a new copy. 
// Without it will just create a Reference. 

console.log('userone', userOne);
console.log('userTwo', userTwo);




