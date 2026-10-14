// ======= Type-inference =======

// Here, we will learn how TypeScript automatically figures out the type of variable without explicitly writing it.

let username = "KP";
let age = 34;
let isStudent = false;

console.log(username);
console.log(age);
console.log(isStudent);

//=================================================================
// It is also commonly described as implicit typing, because we didn't explicitly write the types.
//=================================================================


// What happen if we assign a different type?

let score = 100;
score = 200;
// score = "Good"; // Error: Type 'string' is not assignable to type 'number'

// TypeScript inferred that score is a 'number' when it was initialized.
// TypeScript checks that whether all the subsequent assignment(s) match the inferred type.

// ======= Type inference in functions ========

function add(a: number, b: number){
    return a + b;
}

console.log(add(4, 5));

// Here, the parameters a and b are explicitly typed as numbers. But we didn't specify the return type.
// TypeScript infers the return type as number.


// In below example, TypeScript infers the return type as string.

function greeting(){
    return "Hello, TypeScript";
}

console.log(greeting());

// ===== Type inference from arrays ========
let numbers = [10, 20, 30, 34];

numbers.push(12); // Allowed
// numbers.push("fifty") // Error

// TypeScript infers the type as number[], meaning an array of numbers.

let fruits = ["Apple", "Mango", "Banana"];

fruits.push("Grapes"); // Allowed
// fruits.push(10); // Error

// TypeScript infers string[].
// You can also create arrays with an explicit annotation: let fruits: string[] = ["Apple", "Mango", "Banana"];

// ======= Type inference with 'const' and 'let' ===========

let city = "Gurugram";
city = "Delhi";
city = "Mumbai";

// 'let' variables can be reassigned, so TypeScript generally infers a broader type

const country = "India";
// country = "Japan"; // Error: cannot reassign a const

// 'const' variables can not be reassigned. So, TypeScript can preserve the exact value (For example here, "India") as a literal type


// Data Type vs literal types in type inference

// Data types

let colour: string = "red";

colour = "blue";
colour = "white";
colour = "green";
colour = "123" // allowed because colour has type 'string' but it is NOT logical value

// Literal types

let color: "red" = "red";
//color = "blue"; // Error: type "blue" is not assignable to type "red"
// Why? Because the type of color is literally "red", not the broader type string.

let myAge: 18 = 18;  // 18 is a numeric literal type
let isActive: true = true; // true is a boolean literal type

// Note: These types accept only their respective literal values.


// using broad data type
let status: string = "pending";

status = "completed" // allowed and logical
status = "banana" // allowed but NOT logical( banana is not a valid order status)

// using literal type
let uiStatus: "pending" | "processing" | "completed" = "pending";

uiStatus = "completed";
uiStatus = "processing";
// uiStatus = "banana"; // Error: Type '"banana"' is not assignable to type '"pending" | "processing" | "completed"'

// "pending" | "processing" | "completed" is a union of three string literal types
// Hence, The variable status can contain only one of these three exact strings. Not other than these threes

// Let's create a function that displays a different message depending on the state

type UIStatus = "loading" | "success" | "error";

function showStatusMessage(status: UIStatus): string {
    if(status === "loading"){
        return "Loading data....";
    }

    if(status === "success"){
        return "Data loaded successfully...."
    }

    return "Something went wrong";
}

console.log(showStatusMessage("loading")); // Loading data....
console.log(showStatusMessage("success")); // Data loaded successfully....
console.log(showStatusMessage("error"));   // Something went wrong

// Here, We created a reusable type called 'UIStatus'. 
// Now we can use it wherever we need to represent the UI's state.

// ======================
// TypeScript 'any' type
// ======================

// The 'any' type allows you to assign values of any type without errors. 
// Means, It instructs the compiler to skip type-checking.

let value: any;

value = 100;    // allowed
value = true;   // allowed
value = "Okay"; // allowed

console.log(value);

let anotherValue: any = "Hello";
console.log(anotherValue.toUpperCase()); // HELLO

//console.log(anotherValue.toFixed(2)); 

// NOTE: No TypeScript error, No warning showing here, because we have used 'any'. 
// But it is failed at runtime because toFixed() is a number method

// =================================================================================
// Note that to disable implicit typing for the 'any' type,                        ||
// you change the 'noImplicitAny' option in the 'tsconfig.json' file to 'true'.    || 
//==================================================================================

let result: any;

result = 1;
console.log(result); // 1

result = "Excellent"
console.log(result); // Excellent

result = [12, 23, 24];
console.log(result); // [12, 23, 24]

//========================
// 'unknown' type
//========================

let newValue: unknown = "Hello";

newValue = 123;         // allowed
newValue = false;       // allowed
newValue = "New Value"; // allowed

console.log(newValue); // New Value
// How it is different from 'any' type?
// Let's check

//console.log(newValue.toUpperCase()); // TypeScript error

// Why????
// because TypeScript does not know whether newValue is a string, number or boolean

// correction: (How to use 'unknown' safely)
let nextValue: unknown = "Hello";

if(typeof(nextValue) === "string"){
    console.log(nextValue.toUpperCase()) //HELLO
}

// What happens here?
// The typeof check tells TypeScript that value is a string inside the if block. 
// This process is called type narrowing.
