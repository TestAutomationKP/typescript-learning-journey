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

let myName: string = "KP";
myName ="KPP"; 

// Note: let allows reassignment

// let myName: string = "KP1"; // Compile error

// Note: Unlike var, we cannot redeclare it in the same scope
// Hence, this is one of the reason 'let' is much safer than 'var'

const costMRP: number = 99;
//costMRP = 100; // ERROR

// Remember, 'const' does not mean "the value can never change" in any situation.
// 'const' means the variable cannot be reassigned.


