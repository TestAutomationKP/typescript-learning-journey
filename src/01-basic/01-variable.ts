console.log("Hello, Welcome to the learning journey of TypeScript");
console.log("====================================================");

// =====================
// var vs let vs const
// =====================

var age: number = 60;
age = 70;

console.log(age);

// Note : var allows reassignment

var age: number = 20;
var age: number = 30;

console.log(age);

// Note : var allows re-declaration. So, this behavior can cause bugs.
// Hence, in morden TypeScript, we don't use var

// =============== let ==============

let myName: string = "KP";
console.log(myName); // KP

myName ="KPP"; 

// Note: 'let' allows reassignment
console.log(myName); // KPP

// let myName: string = "KP1"; // Compile error

// Note: Unlike 'var', we cannot redeclare it in the same scope
// Hence, this is one of the reason 'let' is much safer than 'var'

let myAge: number = 19; // outer variable

// block scope
{
    let myAge: number = 20; // inner variable that temporarily shadows the outer variable
    console.log(myAge);     // output of inner variable: 20
}

console.log(myAge); // output of outer variable : 19

// The above example is called 'variable shadowing'.

// Learning point: 
// The two myAge variables are separate. Declaring the inner myAge doesn't overwrite the outer myAge.
// Hence, we can say 'let' is block-scoped.

// if block

let isLoggedIn: boolean = true;

console.log(isLoggedIn) // true

if(isLoggedIn){
    const msg = "Welcome back !";
    console.log(msg);

    isLoggedIn = false; // reassigning to 'isLoggedIn' inside the if block
}

console.log(isLoggedIn); // false (observe this !!!)
// console.log(msg) // Error

// Learning point: 
// 'let' allows reassignment, provided the variable is accessible in that scope 
// and the assigned value is compatible with its type.

if(true){
    let yourAge = 25;
    yourAge = 30;
}

// console.log(yourAge); // Error

// Learning Point:
// Also, a 'let' variable declared inside a block cannot be accessed outside that block

//============== const =================

const costMRP: number = 99;
//const costMRP: number = 120; // Redeclaration error. Cannot be redeclared in the same scope
//costMRP = 100; // ERROR: cannot reassign a constant

console.log(costMRP);
// Remember, 'const' does not mean "the value can never change" in any situation.
// 'const' means the variable cannot be reassigned.

// block scope
{
    const costMRP: number = 100; // It is completely a separate declaration
    console.log(costMRP); // 100
}

console.log(costMRP); // 99

// Learning point: 
// The two costMRP constants are separate. 
// Declaring the inner costMRP doesn't overwrite the outer costMRP.
// Hence, we can say 'const' is block-scoped and but its binding cannot be reassigned.

