console.log("Hello, Welcome to the learning journey of TypeScript");
console.log("====================================================");

// =====================
// var vs let vs const
// =====================

var age: number = 60;
console.log(age);       // 60

age = 70;               // reassign with new value
console.log(age);       // 70

// Note : var allows reassignment in the same scope

var age: number = 20;
var age: number = 30;   // re-declation allowed

console.log(age);

// Note : var allows re-declaration. So, this behavior can cause bugs.
// Hence, in morden TypeScript, we don't use var

// =============== let ==============

let myName: string = "KP";
console.log(myName); // KP

myName ="KPP";      // re-assign with another value
// Note: 'let' allows reassignment in the same scope
console.log(myName); // KPP

// Let's try re-declaration using 'let'

// let myName: string = "KP1"; // Compile error

/*
Note: Unlike 'var', we cannot redeclare a varible in the same scope using let.
Hence, this is one of the reason 'let' is much safer than 'var'
*/

/*

Question: What is scope?

Answer:
The easiest way to understand it is:

Scope = where a variable is accessible in your code.

There are two scopes you should understand first:
- Block scope
- Function scope

Question: What is a block?

Answer: A block is code surrounded by { }.

For example:

if (true) {
    // This is a block
}

for (let i = 0; i < 3; i++) {
    // This is also a block
}

{
    // This is also a block
}

Think of { } as creating a little room.

A variable declared inside that room may not be accessible outside it.

*/

// ==== Block scope of 'let' variable =========

let myAge: number = 19;     // outer variable
{
    let myAge: number = 20; // inner variable 'myAge' temporarily shadows the outer variable 'myAge' within this block
    console.log(myAge);     // 20 (TypeScript finds the nearest myAge, which is the inner variable.)
}
console.log(myAge);         // 19 (The inner myAge no longer exists, so TypeScript uses the outer variable.)

/* 
Learning point: 
 The two myAge variables are separate. Declaring the inner myAge doesn't overwrite the outer myAge.
 Hence, we can say 'let' is block-scoped. it means we can have another variable with the 
 same name in a nested block. This is called 'variable shadowing' 
*/

// if block

if(true){
    let yourAge = 25;
    console.log(yourAge); // 25
    yourAge = 30;         // re-assignment
}

// console.log(yourAge); // Error. Because the inner variable 'yourAge' no more exists.

// Another example

let isLoggedIn: boolean = true;

console.log(isLoggedIn) // true

if(isLoggedIn){
    let msg = "Welcome back !";
    console.log(msg);       // scope of "msg" is within this 'if block' only.

    isLoggedIn = false;     // reassigning the OUTER variable 'isLoggedIn'  to 'false' inside the if block
}

console.log(isLoggedIn);    // false (observe this !!!)
// console.log(msg)         // Error: Cannot find name 'msg'. The inner variable 'msg' is no longer exists.

/*
- The 'let' variable which is declared inside a block/if block, that can only be accessible within that block. 
- A 'let' variable declared inside a block cannot be accessed from outside that block
- 'let' allows reassignment and the assigned value is compatible with its type.
*/

// Another Example

let nameOne: string = "KP";
console.log(nameOne); // KP

{
    let nameOne: string = "KPP1"; // Completely a new variable
    console.log(nameOne); // KPP1

    nameOne = "KPP2"; // inner 'nameOne' gets updated with this re-assignment
}

console.log(nameOne); // KP

// Another block

for (let i = 0; i < 3; i++) {
    console.log(i); // i belongs to the loop's scope
}

// console.log(i); // Error

/*
- let is block-scoped. 
- If I declare another 'let variable' with the same name inside a nested block, it creates a separate variable. 
- Changes to the inner variable do not affect the outer variable.
*/

//============== const =================

const costMRP: number = 99;
//const costMRP: number = 120;  // Redeclaration error. Cannot be redeclared in the same scope
//costMRP = 100;                // ERROR: cannot reassign a constant

console.log(costMRP);
// Remember, 'const' does not mean "the value can never change" in any situation.
// 'const' means the variable cannot be reassigned.

// block scope
{
    const costMRP: number = 100;    // It is completely a new variable inside the block
    console.log(costMRP);           // 100
}

console.log(costMRP); // 99

/*
The two costMRP constants are separate. 
Declaring the inner costMRP doesn't overwrite the outer costMRP.
Hence, we can say 'const' is block-scoped and but its binding cannot be reassigned.
*/

// Another Example

if (true) {
    const age = 25;
    console.log(age); //25
}

// console.log(age); // Error


// 1. Primitive value — cannot re-assign/change with const

const score: number = 90;

// score = 80; // Error message : Cannot assign to 'score' because it is a constant

// 2. Object — the object's properties value can change

const person = {
    name: "KP",
    age: 25
};

person.name = "Amit"; // allowed
person.age = 30; // allowed

console.log(person.name);


/* Error: Cannot assign to 'person' because it is a constant.

person = {
    name: "John",
    age: 30
};

Because now you're trying to make person refer to a different object.

*/

// Yes! But we didn't reassign person.

// const prevents accidental reassignment


// ======== Variable initialization : let vs const ====

// With 'let' — declaration and initialization can be separate

let a: number; // declaration
a = 25;        // initialization
console.log(a);

// Note: 'let' allows you to declare the variable first and assign a value later.

// With 'const' — you must initialize immediately after declaration

/* Error

const b: number;
b = 25;

*/

const b: number = 25; // declaration + initialization
console.log(b);

/*
- 'let' can be declared without a value and initialized later; 
- 'const' must be initialized when declared.
*/

// Q. Is let function-scoped or block-scoped?

// let is block-scoped.

if (true) {
    let x = 10;
}

//console.log(x); // Compile Error: cannot find name 'x'

// x exists only inside the if block.

