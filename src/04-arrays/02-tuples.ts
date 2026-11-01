// A tuple is an array where the number of elements and their types are fixed and known in advance.
// tuples define the type of each position.

// Tuple with one element which is a number

let num: [number] = [90]; 

/*
If we write,

let num: [number] = [90, 95]; 

Error: 

Type '[number, number]' is not assignable to type '[number]'.
Source has 2 element(s) but target allows only 1

*/

// Tuple with one string element

let city: [string] = ["Mumbai"];


let user: [string, number, boolean] = [ "John", 32, true ];

/*
Here:
- First element must be a string.
- Second element must be a number.
- Third element must be a boolean.
*/

console.log(user);    // [ 'John', 32, true ]
console.log(user[0]); // John
console.log(user[1]); // 32
console.log(user[2]); // true

// WRONG oder of type
// let userOne: [string, number, boolean] = [26, "John", false]; // Error : 1st, 2nd and 3rd elements must be string, number abd boolean respectively
// Number of elements mismatched
// let userOne: [string, number, boolean] = ["John", 26]; // Error: 3rd element which should be boolean is missing

// ======= Update tuple ====

// update the 'user' tuple
user[1] = 35;
user[2] = false

console.log(user);    // [ 'John', 35, false ]

// ======= Optional elements in tuples =====

// You can make tuple elements optional using ?.

let userInfo: [number, string, boolean?];

// The third element is optional

userInfo = [2, "Alice", true];
console.log(userInfo[2]); // true

userInfo = [1, "John"];
console.log(userInfo[2]); // undefined

// ======== Named tuples ========

// Named tuples improve code readability.

let employee: [id: number, name: string, salary: number];

employee = [101, "John", 50000];

console.log(employee[1]); // John

// ======= Tuple with rest elements =====

// You can use rest syntax (...) to allow additional elements os a SPECIFIED type.

let scores: [string, ...number[]];

// The first element must be a string, and the remaining elements must be numbers.

scores = ["John", 80, 90, 95];
console.log(scores.length); // 4

scores = ["Alice", 85, 92];
console.log(scores.length); // 3

// ***** Can tuples be passed as function parameters?

function displayUser(user: [number, string]): void {
  console.log(`${user[0]}. ${user[1]}`);
}

displayUser([1, "John"]); // 1. John


// ***** Can a function return a tuple?

function getUser(): [number, string] {
  return [1, "John"];
}

let user1 = getUser();

console.log(user1); // [ 1, 'John' ]
console.log(user1[0]); // 1
console.log(user1[1]); // John


// Can a tuple contain object types?

// Yes.

type User_Details = {
  id: number;
  name: string;
};

let userdata: [User_Details, boolean] = [
  { id: 1, name: "John" },
  true
];

//  Can tuples be nested?

// Yes.

let data: [
  string,
  [number, number]
] = ["Point", [10, 20]];

console.log(data); // [ 'Point', [ 10, 20 ] ]

//  ======= Combining Tuples and Unions ======

// You can also build tuples where individual slots accept a union of types, 
// or create unions consisting of multiple tuple variations

// A tuple where the second slot can be either a string or a number
type MixedTuple = [boolean, string | number];

const item1: MixedTuple = [true, "Active"];
const item2: MixedTuple = [false, 404];

// A union of distinct tuples
type ResponseTuple = [status: "success", data: string] | [status: "error", error: Error];


// ======== Tuple union ========

/*
Imagine you're developing an e-commerce application. A payment can have two possible outcomes:
    1. Payment successful → Transaction ID (number).
    2. Payment failed → Error message (string).
*/

type PaymentResult = ["successful", number] | ["failed", string];

// Valid
let payment1: PaymentResult = [
    "successful",
    101
];

console.log(payment1); // [ 'successful', 101 ]

// Valid
let payment2: PaymentResult = [
    "failed",
    "Insufficient balance"
];

console.log(payment2); // [ 'failed', 'Insufficient balance' ]

// Invalid
/*
let payment3: PaymentResult = [
    "pending",
    "Processing"
];
*/

// ========== Using tuple union with conditional statements ======

// This is where tuple unions become particularly useful.


function processPayment(result: PaymentResult): void {

    if (result[0] === "successful") {
        console.log("Payment successful!");
        console.log("Transaction ID:", result[1]);

    } else {
        console.log("Payment failed!");
        console.log("Reason:", result[1]);
    }
}

processPayment(["successful", 102]);

processPayment(["failed", "Insufficient balance"]);


// Another example: API response
// Imagine an API that can return either user data or an error.

type UserResponse =
    | ["success", number, string]
    | ["error", number, string];

/*

Here are the two possible structures:

Status	        HTTP code	    Message
------          ---------       ---------
"success"	    200	            User fetched successfully
"error"	        404	            User not found

*/

let response: UserResponse = [
    "success",
    200,
    "User fetched successfully"
];

if (response[0] === "success") {
    console.log(`HTTP code : ${response[1]}`);
    console.log(`Message : ${response[2]}`);
} else {
    console.log("Error:", response[2]);
}

// Output:
// HTTP code : 200
// Message : User fetched successfully

// ****** What is tuple inference?

// TypeScript can infer tuple types in certain contexts, 
// but ordinary array literals are generally inferred as arrays.

let a = [1, "John"]; // (string | number)[]

let b = [1, "John"] as const; // readonly [1, "John"]

// ======= tuple destructing ======

let user_info: [number, string] = [1, "John"];

let [id, name] = user_info;

console.log(id);   // 1
console.log(name); // John