/* 
What is an array?
- An array is a collection of multiple values stored in a single variable.
- array is an ordered list of data.
- syntax: let arrayname: type[];

*/

// Declare an empty array of strings
let skills: string[] = [];

// add one or more strings to the array
skills[0] = 'Python';
skills[1] = 'TypeScript';
skills[2] = 'JavaScript';

console.log(skills); // [ 'Python', 'TypeScript', 'JavaScript' ]

// There are two ways to declare an array

// 1. Using square brackets (T[])

let fruits: string[] = ['Mango', 'Apple', 'Banana', 'Orange'];

console.log(fruits);            // [ 'Mango', 'Apple', 'Banana', 'Orange' ]
console.log(typeof(fruits));    // object
console.log(fruits[0]);         // Mango
console.log(typeof(fruits[0])); // string
console.log(fruits[2]);         // Banana

// 2. Using a generic array type, Array<T> (i.e. Array<elementType>)

let fruitList: Array<string> = ['Mango', 'Apple', 'Banana', 'Orange'];

console.log(fruits);            // [ 'Mango', 'Apple', 'Banana', 'Orange' ]
console.log(fruits[1]);         // Apple
console.log(fruits[3]);         // Orange
console.log(fruits[4]);         // undefined


let scores: Array<number> = [89, 90, 95, 80];

console.log(scores[1]); // 90
console.log(scores[3]); // 80
console.log(scores[5]); // undefined

// Which TypeScript option helps detect potentially undefined indexed access?
// noUncheckedIndexedAccess 
// (TypeScript generally permits the access but may report undefined when strict indexed-access checking is enabled.)

// ====== Multi type array : Array of different data types ======

// TypeScript array can contain elements of different data types

let data: (string | number)[] = [ 'John', 25, 'Smith', 30 ];

// Here, the array can contain either strings or numbers.

console.log(data[0]); // John
console.log(data[1]); // 25

// Another Example

let values: Array<string | number | boolean> = ['Apple', 3, 'Orange', 4, false, 6, 9, 'Mango', true];

console.log(values[0]); // Aplle
console.log(values[1]); // 3
console.log(values[4]); // false
console.log(values[6]); // 9
console.log(values[7]); // Mango

// Interview tip: Remember this simple rule:

// T[] and Array<T> are equivalent ways to declare arrays in TypeScript. T stands for type.
// (string | number)[] is equivalent to Array<string | number>

// ====== Accessing array elements =======

// Array elements can be accessed  on the basis of index

console.log(fruits[0]); // Mango
console.log(fruits[1]); // Apple
console.log(fruits[2]); // Banana
console.log(fruits[3]); // Orange
console.log(fruits[4]); // undefined

// using for loop with an index

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// print the index and value

for(let i = 0; i < fruits.length; i++) {
    console.log(`Index: ${i}, Value: ${fruits[i]}`);
}

// reverse for loop

let numbers: number[] = [13, 56, 73, 81, 39, 94];

for(let i = numbers.length - 1; i >= 0; i--){
    console.log(numbers[i]);
}

// ======== Using for...of loop  ==========

// If you only need the values and don't need their indexes, use for...of

let cities: string[] = ['Delhi', 'Mumbai', 'Bangalore', 'Gurugram'];

for(let city of cities){
    console.log(city);
}

// ======= Using for...in loop  ==========

// If you want to access array indexes, you can use for...in.

for(let index in cities){
    console.log(`Index: ${index}, Value: ${cities[index]}`);
}

// ========= using forEach() ==========

// forEach() is an array method in TypeScript that executes a callback function once for every element in an array.
// It is commonly used when you want to iterate through an array and perform an operation on each element.

fruits.forEach(function(fruit: string) : void {
    console.log(fruit);
});

// Note: Here, we are using a 'Function Expression (anonymous function)' as a callback inside forEach().

/*

fruits.forEach()	    : Calls the array's 'forEach' method
function	            : Declares a function
fruit: string	        : Parameter with string type
: void	                : Function does not return a value
{ console.log(fruit); }	: Function body


** Why is it called an anonymous function?

Because the function doesn't have its own name.

** Why is it called a function expression?

Because the function is being used as an expression and passed directly as an argument to forEach().

*/

// Important: TypeScript type inference : You don't actually need to explicitly specify 'fruit: string' or ': void' here.
// TypeScript automatically infers them from the array and callback context.

fruits.forEach(function(fruit){
    console.log(fruit);
});

// 'fruit' is automatically inferred as string.
// The callback return type is inferred as 'void'

// ==== forEach() method Using Arrow function expression

fruits.forEach((fruit:string): void => {
        console.log(fruit);
});

// ===== forEach() method using named function

function printFruits(fruit: string): void{
    console.log(fruit);
}

fruits.forEach(printFruits);

// ========== Array with objects ================

type User = {
    id: number;
    name: string;
    email: string;
};

// 1. You can also create an array containing objects using T[].

const users: User[] = [
    {
        id: 1,
        name: "John",
        email: "john@gmail.com"
    },
    {
        id: 2,
        name: "Alice",
        email: "alice@gmail.com"
    }
];

console.log(users);

/*
[
  { id: 1, name: 'John', email: 'john@gmail.com' },
  { id: 2, name: 'Alice', email: 'alice@gmail.com' }
]
*/

console.log(users[0]);
// { id: 1, name: 'John', email: 'john@gmail.com' }

// User[] means an array containing objects that follow the User type.

// 2. You can also create an array containing objects using Array<T>.

const userList: Array<User> = [
    {
        id: 1,
        name: "John",
        email: "john@gmail.com"
    },
    {
        id: 2,
        name: "Alice",
        email: "alice@gmail.com"
    }
];

console.log(userList);
console.log(userList[1]);

// ======= common array methods ========

let numberList: number[] = [10, 45, 72, 84];

console.log(numberList);        // [ 10, 45, 72, 84]
console.log(numberList.length);

// modify existing element
numberList[0] = 11;
console.log(numberList);        // [ 11, 45, 72, 84]

// insert/add element at the end of the array
numberList.push(88);

console.log(numberList);        // [ 10, 45, 72, 84, 88 ]
console.log(numberList.length);

// insert/add element at the begining of the array
numberList.unshift(19);

console.log(numberList);        // [ 19, 10, 45, 72, 84, 88 ]
console.log(numberList.length);

// Remove first element from an array
numberList.shift();

console.log(numberList);        // [ 10, 45, 72, 84, 88 ]
console.log(numberList.length);

// Remove last element from an array

numberList.pop();

console.log(numberList);        // [ 10, 45, 72, 84]
console.log(numberList.length);

/*

Interview tip: 

If an interviewer asks whether TypeScript arrays have a fixed size or must contain elements 
of the same type, the answer is No. TypeScript arrays are dynamically resizable, and union types allow multiple 
element types.

*/

// ====== What is the purpose of 'filter()' ? ========

// It creates a new array containing elements that satisfy a condition

let myNumbers: number[] = [12, 32, 31, 14, 15];

/* function expression

let result = myNumbers.filter(function(n: number): boolean {
        return n <= 15;
});

*/

/*
let result = myNumbers.filter((n: number): boolean => {
    return n <= 15;
});

*/

let result = myNumbers.filter( n => n <= 15 );

console.log(result); // [ 12, 14, 15 ]

/*
How does it work?
- filter() visits every element in the array.
- n represents the current element.
- n > 15 checks whether the current element is greater than 15.
- If the condition returns true, the element is included in the new array.
- If it returns false, the element is excluded.

Important: filter() callback has three parameters

The callback function can receive three arguments:

array.filter((element, index, array) => {
    // Your condition
});


Parameter	    Meaning
---------       ----------
element	        Current array element
index	        Current element's index
array	        Original array being filtered

*/

let anotherResult = myNumbers.filter((element, index, array) => {
    console.log(element);
    console.log(index);
    console.log(array);

    // return element > 15; // [ 32, 31 ]
    return index > 2; // [ 14, 15 ]
    
});

console.log(anotherResult); // [ 32, 31 ]
//You can use only the parameters you need. You don't have to specify all three.

/*
Remember this: filter() does not contain an arrow function internally by default. 
Instead, you pass a callback function (which can be an arrow function, a traditional function expression, 
or a named function) to filter().
*/

// ======== What is the purpose of find()? =====

// It returns the first element satisfying a condition. If no element matches, it returns undefined.

let a = [10, 20, 30];

let resultA = a.find(n => n > 15);
console.log(resultA); // 20

let resultB = a.find(n => n > 30);
console.log(resultB); // undefined

// ========= What is the difference between find() and filter()? =======

// find() returns one matching element, while filter() returns all matching elements in a new array.

let num = [10, 20, 30, 40];

let c = num.find(n => n > 15);
let d = num.filter(n => n > 15); 

console.log(c); // 20
console.log(d); // [20, 30, 40]

// ======== What is the purpose of reduce()? =========

// The reduce() method processes all array elements and combines them into a single value.
// It reduces an array into a single accumulated result.

// numbers.reduce(callback, initialValue);

let nums = [10, 20, 30];

/* named function
function addNumbers(sum: number, n: number): number {
  return sum + n;
}

let total = numbers.reduce(addNumbers, 0);
*/

/* functiona expression
let total = nums.reduce(
  function (sum: number, n: number): number {
        return sum + n;
  }, 
  0
);
*/

let total = nums.reduce(
    (sum, n) => sum + n, 0
);

console.log(total); // 60

/*
Here:
- sum = accumulator, which stores the running total.
- n = current array element.
- 0 = initial value of sum.(Instead of 0, check with other value and observe the total value)
*/