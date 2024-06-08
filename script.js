//let variable is block scoped and mutable

let x = 10;
if (true) {
  let x = 20; // This x is different from the one outside
  console.log(x); 
}
console.log(x);

//const is also block scoped and immutable
const y = 7;
console.log(y);

// arrow functions are shorter ways to write one line functions that do not need to be declared with the keyword function
const multiple = num => num * 5;
console.log(multiple(5));

//foreach Executes a provided function once for each array element.
[1,2,3].forEach(function(item, index){
    console.log(item, index);
});

//map Creates a new array by applying a function to each element of the original array.
const three = [1,2,3];
const doubled = three.map(function(item){
    return item * 2;
});
console.log(doubled);

//filter Creates a new array with all elements that pass a test implemented by a provided function.
const ints = [1,2,3];
const evens = ints.filter(function(item){
    return item % 2 === 0;
});
console.log(evens);

//reduce Reduces the array to a single value by applying a function to each element (from left to right).
const sum = [1,2,3].reduce(function(total, item){
    return total + item;
}, 0);
console.log(sum);

//splice Adds or removes elements from an array.
const fruits = ['apple', 'banana', 'orange','mango'];
fruits.splice(0, 1);

console.log(fruits);

//an object is a collection of related properties and or similar methods
// objects can represent real world objects (people,products,places)

const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log('Hello, I am John')},
}

const person2 = {
    firstName: 'patrick',
    lastName: 'star',
    age: 42,
    isEmployed: false,
    sayHello: function(){console.log('bing boom patrick star')},
}

console.log(person1.firstName);
console.log(person1.lastName);

console.log(person2.firstName);
console.log(person2.lastName);

person1.sayHello();
person2.sayHello();

// function ArrayAdditionI(arr) {
//     // Find the maximum value in the array
//     var max = Math.max.apply(null, arr);
    
//     // Remove the maximum value from the array
//     var arrWithoutMax = arr.filter(function(num) {
//       return num !== max;
//     });
    
//     // Check if any combination of numbers in the array (excluding the largest number)
//     // can be added up to equal the largest number
//     function canSumToMax(arr, target) {
//       if (arr.length === 0) {
//         return target === 0;
//       }
//       var num = arr[0];
//       arr = arr.slice(1);
//       return canSumToMax(arr, target) || canSumToMax(arr, target - num);
//     }
    
//     return canSumToMax(arrWithoutMax, max) ? "true" : "false";
//   }
  
//   // Test the function
//   console.log(ArrayAdditionI([4, 6, 23, 10, 1, 3])); // Output: true
  