//=========== function parameters ========

//=== 1. Parameter type annotations =====
/*
syntax:

function functionName(parameter: Type): ReturnType {
  // Function body
}

*/
// - parameters are number
// - return type - number

function calculateArea( width: number, length: number): number{
    return width * length
}

console.log(calculateArea(5, 6));
// console.log(calculateArea("7", 6)); // Error: string is not a number

// combination of different parameter type

function printDetails(
    name: string, 
    age: number, 
    isActive: boolean
): void{
    console.log(name, age, isActive);
}

printDetails("KP", 10, true);

// printDetails(20, "Alex", false); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
// printDetails(true, "20", 10); // Error

// NOTE: Required arguments are matched to parameters by position.

function userInfo(name: string, age: number): string{
    return `${name} is ${age} years old.`;
}

console.log(userInfo("KP", 10));
//console.log(userInfo("KP"));     // Error: Expected 2 arguments, but got 1
//console.log(userInfo(10, "KP")); // Error

// ===== union types in parameters ====

//A union type allows a parameter to accept more than one specified type. The '|' symbol means “or.”

function printId(id: string | number): void{
    console.log(`ID : ${id}`);
}

// The function accepts either a string or a number.
printId(101);       // ID : 101
printId("IND-101"); // ID : IND-101

// ====== using type narrowing ======
/*
A union does not mean that every operation is available for every possible type. 
You need to check the actual type before using type-specific operations.

*/

function formatID(id: string | number): string{

    if(typeof(id) === "number"){
        return `ID-${id.toString().padStart(4, "0")}`;
    }
   return id.toUpperCase();
}

console.log(formatID(42));  // ID-0042
console.log(formatID("IND-123")); // IND-123

// The 'typeof' check tells TypeScript which type is currently being handled.

// ======= 'literal' union type in parameters =======

function setStatus(status: "Pending" | "In Progress" | "Completed"): string{
    return `The current status is : ${status}`;
}

console.log(setStatus("Pending"));
console.log(setStatus("Completed"));

//console.log(setStatus("Pass")); // Error : Argument of type '"Pass"' is not assignable to parameter of type '"Pending" | "In Progress" | "Completed"'

// Literal unions are useful when you want to restrict input to a known set of valid literal values.

// ======= object parameters ======

// If a function needs many related inputs, consider using an object parameter 
// instead of a long list of positional arguments.

// Version 1 : using positional arguments

function createUser(name: string, age: number, email: string, isActive: boolean): void {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Email: ${email}`);
    console.log(`Active: ${isActive}`);
}

createUser("KP", 10, "kp@abc.com", true);

// The disadvantage: 
// If you have many arguments, it's easy to forget their order or accidentally swap values of the same type.

// Version 2 : using object parameter

function createUserOne(user: {
    name: string;
    age: number;
    email: string;
    isActive: boolean;
}): void {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
    console.log(`Active: ${user.isActive}`);
}

// pass one object
createUserOne({
    name: "Rahul",
    age: 25,
    email: "rahul@abc.com",
    isActive: true
});

// Advantage: is that each value is identified by its property name, 
// so we don't need to remember the argument order.

// Property order does not matter. check this....!!!

createUserOne({
    email: "alex@xyz.com",
    isActive: true,
    name: "Alex",
    age: 30
});

// ===== Using 'type' keyword to define the structure of an object =====

// Define the type
type User = {
    name: string;
    age: number;
    email: string;
    isActive: boolean;
};

// Use the type as function parameter
function createUserTwo(user: User) : void{
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
    console.log(`Active: ${user.isActive}`);
}

// The parameter 'user: User' tells TypeScript that the function expects an object matching the 'User' type.


// declare an object using the type
const newUser: User = {
    name: "KP",
    age: 10,
    email: "kp@abc.com",
    isActive: false
};

// pass it to the function
createUserTwo(newUser);

// Another approach using an interface

// Describe the object structure
interface UserInfo {
    name: string;
    age: number;
    email: string;
    isActive: boolean;
}

function userDisplay(user: UserInfo): void{
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
    console.log(`Active: ${user.isActive}`);
}

// declare an object
const anotherUser: UserInfo = {
    name: "Smith",
    age: 10,
    email: "smith@abc.com",
    isActive: true
};

userDisplay(anotherUser);

// If you want to update/change only one property

interface UserOption{
    name: string;
    age: number;
    city?: string;
}

function displayUser(user: UserOption): void{
    console.log(user.name);
    console.log(user.age);
    console.log(user.city ?? "City not provided");
}

const userThree = {
    name: "Hari",
    age: 25
};

displayUser(userThree); // Hari 25 city not provided

/*
- Object parameters are particularly useful when you want optional properties.

- With 'positional arguments', you would need to manage omitted values carefully. 
  With an object, you can simply leave an optional property out.

- One important distinction: an object parameter does not automatically make every property optional. 
  Only properties marked with ? can be omitted.

 */

// ====== Optional parameters using ? =======

function greet(name?: string): string {
    if (name !== undefined) {
        return `Hello, ${name}!`;
    }

    return "Hello, guest!";
}

console.log(greet("Rajeev")); // Hello, Rajeev!
console.log(greet());        // Hello, guest!

/*

- An optional parameter is marked with a question mark (?).
- The ? means the caller is allowed to leave out the argument.
- If the caller omits it, the parameter's value is undefined.

- if (name !== undefined) : If a name was supplied, the function uses it. Otherwise, it returns the guest greeting.
- Inside this function, 'name' can be a string or undefined. It is like,
  function greet(name?: string | undefined): string

*/

// ======== Optional parameters with multiple arguments ========
// Imagine a function that formats a person's full name.

function getFullName(
    firstName: string,
    lastName?: string
    ): string {

    if (lastName !== undefined) {
        return `${firstName} ${lastName}`;
    }

    return firstName;
}

console.log(getFullName("Shiv", "Kumar"));   // Shiv Kumar
console.log(getFullName("Rahul"));           // Rahul


// Another version
function getFullName_V2(
    firstName: string,
    lastName?: string
    ): string {

    return `${firstName} ${lastName ?? ""}`;
}

console.log(getFullName_V2("Shiv", "Kumar"));   // Shiv Kumar
console.log(getFullName_V2("Rahul"));           // Rahul


// TypeScript understands that lastName can be either:
// - A string, such as "Kumar".
// - undefined, when the argument is omitted or explicitly passed as undefined.


// Rule: Put required parameters before optional parameters.


// ======= What if an optional argument is in the middle? ======

// A function that needs a first name and a city, but also accepts an optional nickname.

function describePerson(
    firstName: string,
    nickname: string | undefined,
    city: string
): string {
    return `${firstName} (${nickname ?? "no nickname"}) lives in ${city}.`;
}

console.log(describePerson("Amitabh", "Amit", "Delhi"));    // Amitabh (Amit) lives in Delhi.
console.log(describePerson("Rajeev", undefined, "Mumbai")); // Rajeev (no nickname) lives in Mumbai.


// ======= real difference: ? versus | undefined ====

// Version A — Optional parameter

function greetA(name?: string): void {
    console.log(name);
}

greetA("Amit");     // Valid
greetA();           // Valid, it means we can omit the argument
greetA(undefined);  // Valid


// Version B — Required parameter that permits undefined

function greetB(name: string | undefined): void {
    console.log(name);
}

greetB("Rahul");    // Valid
// greetB();        // Error: Expected 1 argument. It means we CANNOT omit the argument
greetB(undefined);  // Valid

// NOTE: With greetB, you must provide the argument, even if its value is 'undefined':

/*

Remember this simple rule
- ? controls whether the argument or property can be omitted.
- '| undefined' controls whether the value can be undefined.
- Hovering over an optional parameter shows 'string | undefined' because the parameter's value might be missing.

*/

// ======= Destructuring object parameters ========

// You can extract object properties directly in the parameter list.

interface Product{
    name: string;
    price: number;
}

function displayProduct({name, price}: Product): string{
    return `Product name: ${name} : Rs.${price}`;
}

const productOne = {
    name: "Laptop",
    price: 12000
};

console.log(displayProduct(productOne));
console.log(displayProduct({
    name: "Phone", 
    price: 15000
}));

// Anther Example

/*
Real-world use: shopping carts, product catalogs, and key-value data.
A Map stores key-value pairs, such as product names and their prices.
*/

const products = new Map<string, number>([
    ["Laptop", 15000],
    ["Mobile", 7000],
    ["Keyboard", 800],
    ["Mouse", 500]
]);

for(const product of products){
    console.log(product);
}

// Here, each iteration returns an entry containing both the key and value.

/*
[ 'Laptop', 15000 ]
[ 'Mobile', 7000 ]
[ 'Keyboard', 800 ]
[ 'Mouse', 500 ]

*/

for(const [product, price] of products){
    console.log(`${product}: ₹ ${price}`);
}

// The [product, price] syntax uses array destructuring to extract them.

/*
Laptop: ₹ 15000
Mobile: ₹ 7000
Keyboard: ₹ 800
Mouse: ₹ 500
*/

// ===== Array Parameters =======

// You can pass an array to a function by specifying the element type.

function printNames(names: string[]): void{
    for(const name of names){   // for....of loop
        console.log(name);
    }
}

printNames(["KP","Alex","Smith"]);

// ===== Rest Parameters =======

// A rest parameter allows a function to accept a variable number of arguments.
// Use ... before the parameter name.

function sendMessage(receipient: string, ...messages: string[]): void{
    for(const message of messages){
        console.log(`To ${receipient}: ${message}`);
    }
}

sendMessage("KP","Welcome !", "Your order is ready", "Now the order is on the way");

/*
To KP: Welcome !
To KP: Your order is ready
To KP: Now the order is on the way

Note: A rest parameter must be the last parameter in the function definition.
*/

//====== Function Types and callbacks
type Calculator = (a: number, b: number) => number;
// Calculator means: A function that accepts two numbers and returns a number.

const add: Calculator = (a: number, b: number) => a + b;
// This tells TypeScript that add must contain a function matching the Calculator type.
// That means it must accept two numbers and return a number.

const sub: Calculator = (a: number, b: number) => a - b;
const mul: Calculator = (a: number, b: number) => a * b;
const div: Calculator = (a: number, b: number) => a / b;

/*
const add: Calculator = (a: number, b: number) => a + b;
can be written as
const add: Calculator = (a, b) => a + b;

(You don't need to write : number after a and b in this example 
because TypeScript infers their types from the Calculator annotation)


is equivalent to
// using arrow function
const add: Calculator = (a, b) => {
    return a + b;
};

OR

// using arrow function
const add = (a: number, b: number): number => a + b;

OR

// using function expression
const add = function(a: number, b: number): number {
    return a + b;
};

 */

// define execute() function
function execute(
    a: number,
    b: number,
    operation: Calculator
): number{
    return operation(a, b);
}

console.log(execute(10, 5, add)); // 15
console.log(execute(12, 3, mul)); // 36

/*
- A callback is a function passed to another function so that the receiving function can call it 
- The parameter 'operation' receives the callback. add/sub/mul/div is the callback function being 
  passed to execute().

When execute() runs this line:
return operation(a, b);

it invokes that callback.
*/
