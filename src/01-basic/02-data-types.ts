/*

PRIMITIVE TYPES: number, string, boolean, void, null, undefined, symbol, bigint

NON-PRIMITIVE/OBJECT VALUES: object, array, function, class instance

But there's an important distinction here:
interface, type, union, tuple, etc. are TypeScript type-system constructs, not JavaScript runtime data types.

*/

//========================================================================
// number : numeric values - Use number for interger, floting-point number.
//========================================================================
let age: number = 18;
let temp: number = 35.5;
let price: number = 99.9;
let balance: number = -10;

console.log(age);
console.log(price);
console.log(temp);
console.log(balance);

//===================
// string - text
//===================

let myName: string = "KP";
let country: string = 'India';
let city: string = "Mumbai";
let value: string = "25"; // Note "25" is string and 25 is number

console.log(`Hello, I am ${myName}, from ${country}, staying in ${city}.`);
console.log(`Value : ${value}`);

//==========================
// boolean - true or false 
//==========================

// - use boolean for conditions and decision makings

let islogged: boolean = true;
let canIVote: boolean = age >= 18;

console.log(islogged);
console.log(canIVote);

if(islogged){
    console.log(islogged);
    islogged = false;
}

console.log(islogged);

// Boolean coercion : Converting a value to boolean

console.log(Boolean(0));        // false
console.log(Boolean("Hello"));  // true
console.log(Boolean(1));        // true

// What does ! do?
// It performs logical negation

console.log(!true);  // false
console.log(!false); // true

/*
Q: What does !!value do?
A: It converts a value to a Boolean

(JavaScript Runtime)
console.log(!!"hello"); // true
console.log(!!0);       // false
console.log(!!11);      // true

*/

//============
// undefined
//============

/*
- 'undefined' means a value is absent or has not been assigned/provided.
- 'undefined' commonly appears 
     - when a variable has not received a value
     - there is a missing object property
     - a function does not retun a value
     - a value not found in an array
*/

let cityName: string;
//console.log(cityName);       // Error: variable is used before being assigned

let address;
console.log(address);          // undefined 
// basically TypeScript means: "I haven't decided what 'address' is yet."

/*
let city: string;              // declaration
//console.log(cityName);       // Error: variable is used before being assigned

city = "Mumbai";                // initialisation
console.log(a);

In such situation, You can explicitly tell TypeScript that a variable may be 'undefined':

let a: string | undefined = undefined; 
*/

// A variable declared without an initializer( no value assigned at the time of declaration)

let cityname: string | undefined; // declaration is done but it is not initialised
console.log(cityname);            // undefined

cityname = "New Delhi"; // valid (assigned a value later)
console.log(cityname);  // New Delhi

cityname = undefined;  // valid
console.log(cityname); // undefined

/*
let a: string | undefined; 
            vs 
let a: string | undefined = undefined;

let a: string;  // Notice that, just we have declared the variable 'a' of string type (not initialised)
console.log(a); // error

Without '= undefined'
======================
// 'a' can contain a string or undefined

let a: string | undefined; // Notice that, just we have declared the variable 'a' (not initialised with any value)
console.log(a); // undefined

It means 'a is allowed to contain either a string or undefined'.
But, we haven't explicitly assigned a value yet.

With '= undefined'
==================
// 'a' can contain a string or undefined, and right now I'm deliberately setting it to 'undefined'

let a: string | undefined = undefined; // Notice that, just we have declared the variable 'a' and initialized with a value 'undefined'
console.log(a); // undefined

It means "a is allowed to contain either a string or undefined, and I'm explicitly assigning 'undefined' right now."

string | undefined             : what values are allowed.
string | undefined = undefined : what value is actually assigned right now.

*/

// Example: Item selection

// 'selectedItem' has been declared but no value has been assigned
let selectedItem: string | undefined;

function selectItem(item: string){
    selectedItem = item;
}

console.log(selectedItem); // undefined

selectItem("Laptop");
console.log(selectedItem); // Laptop

// omit the function argument
function greetY(name?: string){
    console.log(name);
}

// omit the argument: means call the function without parameter
greetY();               // undefined (function greetY(name?: string) means function greetY(name?: string | undefined): void)
greetY("TypeScript");   // TypeScript

// ======== Undefined - object property missing ========

type User = {
    name: string;
    email?: string; // ? - indicates it optional
};

// 'email' property is NOT provided
const user1: User = {
    name: "KP"
};

console.log(user1.name);  // KP
console.log(user1.email); // undefined

const user2: User = {
    name: "Alex",
    email: "abc@example.com"
};

console.log(user2.name);  // Alex
console.log(user2.email); // abc@example.com

// ======= Undefined - function does not return a value=========

function greet(): void{
    console.log("Hi");
}

const result = greet(); // Hi
console.log(result);    // undefined

/*
- function prints 'Hi', but does not return anything explicitly.
- TypeScript infers result as 'void' in this case. 
- But at JavaScript runtime, a function that doesn't explicitly return anything, returns 'undefined'
*/

// Check the return statement in the following example

function getUserName(): string {
    return "Alex";
}

console.log(getUserName()); // Alex

// ======= undefined - An array item does not exist=======

const colors: string[] = ["Red","Blue"];

console.log(colors[0]); // Red
console.log(colors[1]); // Blue
console.log(colors[2]); // undefined

// The array has only two elements, at indexes 0 and 1. Index 2 does not exist, so TypeScript returns 'undefined'.

//=============
//    null
//=============

// null - We deliberately/explicitly represent "no value"
// undefined - A value is absent or has not been assigned/provided

//let profilePicture: string | null = "Alex";

let profilePicture: string | null = null; // It means, currently this user has no user profile picture
console.log(profilePicture); // null

// Add a profile picture
profilePicture = "profile.jpg"
console.log(profilePicture); // profile.jpg

//user remove the profile picture
profilePicture = null;       // explicitly clearing the field
console.log(profilePicture); // null

// This is useful especially when a user can add, change, or remove something.

/*
let a: string | null; 
            vs 
let a: string | null = null;

let a: string; // Notice that, just we have declared the variable 'a' of string type (not initialised)
console.log(a); // error

********
Without '= null'
======================

// 'a' can contain a string or null

let a: string | null; // Notice that, just we have declared the variable 'a' (not initialised with any value)
console.log(a); // undefined

It means 'a is allowed to contain either a string or null'.
It does not mean that 'a' is currently 'null'. It means 'null' is one of the allowed types.

But, we haven't explicitly assigned a value yet.
So at runtime, because an uninitialized 'let' variable starts as 'undefined' (NOTE THIS ..... !!!)

*********
With '= null'
==================

// 'a' can contain a string or null, and right now I'm deliberately setting it to 'null'(empty)

let a: string | null = null; // Notice that, just we have declared the variable 'a' and initialized with a value 'null'
console.log(a); // null

string | null        : what values are allowed.
string | null = null : what value is actually assigned right now.

*/
//*********************************************************************
// TypeScript types describe what values are allowed.                 *
// Values are the actual things stored in variables at runtime.       *
//*********************************************************************

// ========== null vs undefined ===========

// Example: updating a profile

// profile object
type ProfileUpdate = {
    name?: string;
    profilePic?: string | null;
};

// property omitted/undefined
// undefined → "We don't have/provide a value here."

const update1: ProfileUpdate = {}; // property was NOT provided

console.log(update1.name);       // undefined
console.log(update1.profilePic); // undefined

// Explicitly clearing the field(picture)/ removing picture
// null → "We intentionally have NO value here."

const update2: ProfileUpdate = {
    profilePic : null            // null → explicitly has NO profile picture
};

console.log(update1.name);       // undefined
console.log(update1.profilePic); // null

// set the picture
const update3: ProfileUpdate = {
    profilePic: "picture.jpg"
};

console.log(update1.name);       // undefined
console.log(update1.profilePic); // picture.jpg

// null - There is intentionally no value
// undefined - There is no value provided(missing or unassigned)

/*
Code	                        Type allows	        Initial runtime value
--------                        ------------        ----------------------
let a: string | null;	        string or null	        undefined
let a: string | null = null;	string or null	        null

Note:
-------
string       → type
null         → type + value
undefined    → type + value
*/

//==========================
// Symbol data type
//==========================

/*
A 'symbol' is a primitive data type used to create completely unique, immutable identifiers. 
Even if you create two symbols with the exact same description, they will never be equal to each other.

*/

const userid: symbol = Symbol("id");

console.log(userid); // Symbol(id)
console.log(typeof userid); // symbol
/*
 - Symbol() is the built-in function that creates a unique symbol. 
 - It means, It generates a unique symbol with description "id" that can serve as a property key.
 - A symbol is a unique token generated by calling the Symbol() factory function. 
   You cannot use the 'new' keyword with it.
*/

// object : user101
const user101 = {
    name: "Alex",
    [userid]: 101
};

// [userid] : Use the value of 'userid' as the property key.
// [userid] : 101, Means store the value 101 under property key "userid"

// object102
const user102 = {
    name: "KP",
    [userid]: 102
};

console.log(user101[userid]); // 101
console.log(user102[userid]); // 102

// compare the Symbol keys.
const userid1: symbol = Symbol("id");
const userid2: symbol = Symbol("id");

// Even if you create two symbols with the exact same description, they will never be equal to each other.

console.log(userid1 === userid2); // false

// ===== void and undefined are not the same TypeScript type ========

let a: void;
let b: undefined;

console.log(a); // undefined; // valid
console.log(b); // undefined; // valid

// 'a' has the TypeScript type 'void', but at runtime the actual value is 'undefined'
// TypeScript : 'a' is typed as 'void'
// JavaScript(at JavaScript runtime): 'a' actually returns 'undefined'

// What are NaN and Infinity?

// They are special numeric values.

console.log(0 / 0);       // NaN
console.log(10 / 0);      // Infinity

// ======== literal type ====

let color: "red" = "red";
// The "red" after the colon is a 'TypeScript literal type'. 
// It means: color is allowed to contain only the exact string "red".

console.log(color); // red
// color = "blue" // Error : ' Type '"blue"' is not assignable to type '"red"'.'

// Let's say, 'status' can only be either 'success', 'pending' or 'failed'

let status: "success" | "pending" | "failed" = "success"; // Note: the variable 'status' is initialized with value "success"
console.log(status);

status = "pending";
console.log(status);

// status = "error"; //ERROR:  Type '"error"' is not assignable to type '"success" | "pending" | "failed"

/*
let status = "success"; // fine
status = "pending"      // fine

But,

let status: "success" | "pending" | "failed"; // Note: the variable 'status' is NOT initialized
console.log(status);                          //Error: Variable 'status' is used before being assigned.

*/

// ======== null/undefined fallback (nullish coalescing (??)) =====
/*
a ?? b means: 

- use a if it is NOT null or undefined; 
- otherwise use b.

: value of 'a' exists            -> use 'a'
: value of 'a' is null/undefined -> use 'b'

*/

const name: string | undefined = undefined;

const person = name ?? "Guest";
console.log(person); // Guest (Reason: Because name is undefined)

const name1: string | undefined = "Alex";

const person1 = name1 ?? "Guest";
console.log(person1); // Alex (Because "Alex" is not null or undefined.)

let username: string | null = null;
console.log(username ?? "Guest"); // Guest (Reason: Because name is 'null')
username = "KP";
console.log(username ?? "Guest"); // KP

let username1: string | null = "admin";
console.log(username1 ?? "Guest"); // admin
// remove the name
username1 = null;
console.log(username1 ?? "Guest"); // Guest (Because we set the value 'null')


// Distinguishing ?? (nullish) from || (logical OR)

const score = 0;

console.log(score ?? 100); // 0. Why? Because 0 is not null or undefined

console.log(score || 100); // 100. Why? Because || considers 0 to be falsy. It means false || true = true

// Nullish Coalescing (??). Returns the right-hand fallback value(backup value) only when the left-hand side is null or undefined
// Logical OR (||). Returns the fallback value(backup value) for any falsy value (including 0, "", and NaN).

/*
Comparison
| Value             | value ?? 100      | value || 100 |
|-------------------|------------------:|-------------:|
| 10                | 10                | 10           |
| 0                 | 0                 | 100          |
| ""                | ""                | 100          |
| false             | false             | 100          |
| null              | 100               | 100          |
| undefined         | 100               | 100          |


?? → "Is it null or undefined?"
|| → "Is it falsy?"

*/
/*
                 TYPESCRIPT
                     │
        ┌────────────┴────────────┐
        │                         │
   TYPE SYSTEM                 RUNTIME
        │                         │
        ▼                         ▼
  compile-time              JavaScript
   checking                  execution
        │                         │
        ├── string                ├── values
        ├── number                ├── undefined
        ├── boolean               ├── null
        ├── null                  ├── objects
        ├── undefined             └── truthy/falsy
        ├── symbol
        └── void

*/
