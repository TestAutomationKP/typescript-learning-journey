/*
What is a return type?

A function can receive input through parameters, process that input, and 
send a result back to the place where it was called.
*/

function sum(a: number, b: number): number{
    return a + b;
}

console.log(sum(12, 13));

const result = sum(20, 30);
console.log(result);


/**
- add is the function name.
- a and b are parameters of type number.
- The ': number' after the closing parenthesis specifies the 'return' type.
- The 'return' statement sends the result back to the caller.
- The returned value is then stored in 'result'.
 */

// === Explicit return type vs inferred return types ====

// TypeScript can determine the return type automatically from the function's implementation. 
// This is called type inference.

// explicit return type : explicitly declare that the function returns a number.

function multiply(a: number, b: number): number{
    return a * b;
}

//Inferred return type

function multiply_1(a: number, b: number){
    return a * b;
}

// TypeScript sees that a * b produces a number, so it infers that the function returns number.

console.log(multiply(4, 5));
console.log(multiply_1(5, 6));

// === The void return type ====

// Sometimes a function performs an action but does not need to return a useful result.

function greet(name: string): void{
    console.log(`Hello, ${name}`);
}

greet("KP");

function subtract(a: number, b: number): number{
    return a - b;
}

const subResult= subtract(23, 12);
console.log(subResult); // 11

function printSubtract(a: number, b: number): void{
    console.log(a - b);
}

printSubtract(23, 12); // 11
const result_1 = printSubtract(23, 12);
console.log(result_1); // 11 and also undefined

/*

- both examples produce the number 11 on the console, their behavior differs:
- subtract() returns 11, allowing the caller to store or reuse it.
- printSubtract() prints 11 itself; it doesn't return that number.
- For a void function, the returned value at runtime is normally 'undefined' if no value is returned.

 */

// === The 'never' return type ===

// never means that a function does not complete normally by returning a value.

/* uncomment it and run it....

function throwError(message: string): never{
    throw new Error(message);
}

throwError("Something went wrong"); // The function throws an error instead of returning a normal result.

*/

// ====== Functions that return 'union' types ====

// suppose a function returns a user's ID, which might be a number or a string.
// TypeScript lets you represent this using a 'union' type with '|'.

function getUserId(isGuest: boolean): number | string {
    if(isGuest){
        return "GUEST-101";
    }

    return 101;
}

const guestID: number | string = getUserId(true);
console.log(guestID); // GUEST-101

const guestID_1 = getUserId(false); // const guestID_1: number | string
console.log(guestID_1); // 101

function getValue(choice: boolean): number | string{
    return choice? 100 : "One hundred";
}

console.log(getValue(true));
console.log(getValue(false));


// ====== Functions that return objects ====

// A function can return a complete object rather than a single primitive value.

type User = {
    id: number;
    name: string;
    isActive: boolean;
};

// Let's create a function that returns a user profile.

function getUser(): User{
    return {
        id: 1010,
        name: "KP",
        isActive: true
    };
}

console.log(getUser());          // { id: 1010, name: 'KP', isActive: true }
console.log(getUser().id);       // 1010
console.log(getUser().name);     // KP
console.log(getUser().isActive); // true

const user1 = getUser();
console.log(user1);          // { id: 1010, name: 'KP', isActive: true }
console.log(user1.id);       // 1010
console.log(user1.name);     // KP
console.log(user1.isActive); // true

/*

The function promises to return an object that matches the 'User' type.

The 'User' type defines the required properties:

type User = {
    id: number;
    name: string;
    isActive: boolean;
};

You can use an 'interface' instead of a 'type' for the same object shape.

interface User {
    id: number;
    name: string;
    isActive: boolean;
};

*/

// ==== Functions that return arrays ===

// A function can return multiple values in an array.

function getScore(): number[]{
    return [12,34,67,38,85];
}

console.log(getScore()); // [ 12, 34, 67, 38, 85 ]
console.log(getScore()[0]); // 12
console.log(getScore()[1]); // 34
console.log(getScore()[2]); // 67
console.log(getScore()[3]); // 38
console.log(getScore()[4]); // 85

const score = getScore();

console.log(score);    // [ 12, 34, 67, 38, 85 ]
console.log(score[0]);
console.log(score[1]);
console.log(score[2]);
console.log(score[3]);
console.log(score[4]);


function getNames(): string[]{
    return ["KP", "JP", "SP"];
}

console.log(getNames());    // ["KP", "JP", "SP"]
console.log(getNames()[0]); // KP
console.log(getNames()[1]); // JP
console.log(getNames()[2]); // SP

const namelist = getNames();
console.log(namelist[0]);
console.log(namelist[1]);
console.log(namelist[2]);

// The generic notation Array<number>, which means the same thing as number[].

// ===== Functions that return tuples =====

// A tuple is useful when a function returns a fixed sequence of values whose positions have specific types.

function getPerson(): [string, number]{
    return ["KP", 100];
}

const person = getPerson();

console.log(typeof(person)); // object
console.log(person[0]);      // KP
console.log(person[1]);      // 100

// The return type : [string, number] means the first element is a string and the second is a number.

function getStudent(): [string, number, boolean]{
    return ["KP", 13, true];
}

const student = getStudent();
console.log(typeof(student));              // object
console.log(`Name: ${student[0]}`);        // Name: KP
console.log(`Roll No: ${student[1]}`);     // Roll No: 13
console.log(`Is Present?: ${student[2]}`); // Is Present?: true

// Use an array (for example, number[]) when the values are a collection of similar items. 
// Use a tuple(like [string, number, boolean]) when each position has a specific meaning and type.

// === Functions that return promises ===

// When a function performs asynchronous work, it often returns a Promise.

async function getMessage(): Promise<string>{
    return "Hello, TypeScript !!!"
}

getMessage().then((message) => {
   console.log(message);
});

// Return type: Promise<string>. It means the function returns a promise that will fulfill with a string.
// The async keyword makes the function return a promise.

// ==== Function returning a function ====

function createCounter(): ()=> number {
    let count = 0;

    return function (): number{
        count++;
        return count;
    };

}

/*

(): () => number 
It means The outer function(outerCounter_one) takes no arguments and returns a function 
that takes no arguments and returns a number.

The returned function retains access to the outer 'count' variable. That's the closure.

*/
const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());

// Return types: The outer function returns a function.
// Closures: The returned function retains access to its surrounding variable.