/*

The main idea is that not every function parameter must be supplied by the caller.

TypeScript gives us two common ways to handle this:
1. Optional parameters using ?
2. Default parameters using =

*/

// ==== Function with required parameter ========

function greet(name: string): void{
    console.log(`Hello, ${name}`);
}

// call the function with parameter (The function requires a name argument.)
greet("TypeScript"); // Hello, TypeScript

// greet() // Error : Expected 1 argument, but got 0

// ==== Optional parameters using ? =====

// An optional parameter is marked with a question mark (?).

function greetA(name?: string): string {
    if (name !== undefined) {
        return `Hello, ${name}!`;
    }

    return "Hello, guest!";
}

console.log(greetA("TypeScript")); // Hello, TypeScript!
console.log(greetA());             // Hello, guest!

// The ? means the caller is allowed to leave out the argument.
// If the caller omits it, the parameter's value is undefined.

// What values can name have?
// Inside this function, name can be a string or undefined.

// conceptually ?: string is string | undefined

// ===== Optional parameters with multiple arguments ====
// A function that formats a person's full name.

function getFullName(
    firstName: string,
    lastName?: string
): string {
    if (lastName !== undefined) {
        return `${firstName} ${lastName ?? ""}`;
    }

    return firstName;
}

console.log(getFullName("Akash", "Sharma")); // Akash Sharma
console.log(getFullName("Akash"));           // Akash

// The required parameter comes first, and the optional parameter comes after it.
// Notice the parameter order (Parameter ordering): firstName: string, lastName?: string

// ==== What if an optional argument is in the middle? ===
// Suppose you have a function that needs a first name and a city, but also accepts an optional nickname.

function describePerson(
    firstName: string,
    nickName: string | undefined,
    cityName: string
): string {
    return `${firstName} (${nickName ?? "no nickname"}) lives in ${cityName}.`;
}

console.log(describePerson("KP", undefined, "Delhi")); // KP (no nickname) lives in Delhi.

// ####### Default parameters using = #######

/*
 A default parameter supplies a fallback value when the caller 
 - omits the argument 
 or 
 - passes undefined.
*/

function greetB(name: string = "Guest"): string {
    return `Hello, ${name}!`;
}

console.log(greetB("TypeScript")); // Hello, TypeScript!
console.log(greetB());             // Hello, Guest!   // Notice: here, the argument is omitted

// name: string = "Guest" means that when no usable argument is supplied for name, the function uses "Guest".

// What if you explicitly pass undefined?
console.log(greetB(undefined)); // Hello, Guest! // Note: The default value is used here too.

// What if you pass an empty string?
console.log(greetB("")); // Hello, ! // Note: An empty string is still a string, so the default does not apply.

// NOTE: default parameters apply when an argument is omitted or is undefined, 
// not simply when its value is empty or falsy.


// ===== Optional vs. default parameters =====

/*

// Optional parameter: ?

function greet(name?: string): string {
    return name === undefined
        ? "Hello, Guest!"
        : `Hello, ${name}!`;
}

// The argument may be omitted. Its value is 'undefined' if omitted, so you handle that possibility in the function.


// Default parameter: =

function greet(name: string = "Guest"): string {
    return `Hello, ${name}!`;
}


// The argument may be omitted, and the function automatically substitutes "Guest".

*/


// ====== Default parameters with multiple arguments ====

// Example: A function for calculating the price of an order.
// Suppose a customer buys a product, and the function allows you to supply a quantity and a discount.

function calculatePrice(
    price: number,
    quantity: number = 1,
    discount: number = 0
): number {
    return price * quantity * (1 - discount);
}

console.log(calculatePrice(100));        // 100  // function uses the defaults: quantity = 1; discount = 0;
console.log(calculatePrice(100, 3));     // 300  // function uses the defaults: discount = 0;
console.log(calculatePrice(100, 3, 0.1)); // 270

// ==== Can you skip a default parameter and provide a later argument? ===

//console.log(calculatePrice(100, , 0.2)); // Syntax error

// You cannot leave an empty positional argument like that.

// Instead, pass 'undefined':
console.log(calculatePrice(100, undefined , 0.2)); // 80

// Passing 'undefined' tells TypeScript/JavaScript to use the default for quantity. i.e. 1

// ========== Practical advice ==========

// If a function has many optional or default settings and you frequently need to skip earlier arguments, 
// consider using an object parameter.

type ProfileOptions = {
    age?: number;
    city?: string;
};

function createProfile(
    name: string,
    options: ProfileOptions = {}
): string {
    const age = options.age ?? 18;
    const city = options.city ?? "Delhi";

    return `${name}, ${age}, ${city}`;
}

console.log(createProfile("Amit", { city: "Mumbai" }));            // Amit, 18, Mumbai
console.log(createProfile("Amit", { age: 20 }));                   // Amit, 20, Delhi
console.log(createProfile("Keshav", { age: 25, city: "Mumbai" })); // Keshav, 25, Mumbai

//======= Combining optional and default parameters ======

function sendMessage(
    message: string,
    recipient?: string,
    priority: string = "Normal"
): string {
    const to = recipient ?? "Everyone";

    return `To: ${to} | Priority: ${priority} | Message: ${message}`;
}

console.log(sendMessage("Hello"));
// To: Everyone | Priority: Normal | Message: Hello

console.log(sendMessage("Hello", "Amit"));
// To: Rahul | Priority: Normal | Message: Hello

console.log(sendMessage("Hello", undefined, "High"));
// To: Everyone | Priority: High | Message: Hello

/*

Here:
- message is required.
- recipient? is optional and may be undefined.
- priority = "Normal" has a default value.

This works because 'recipient' is optional, and 'priority' has a default. 
Both are allowed after the required message parameter.

However, because 'priority' comes after recipient, you must supply 
a placeholder of 'undefined' if you want to set 'priority' without setting a 'recipient'.

*/

// ########## A common mistake: confusing ? with =  #############

function exampleOne(name?: string): void {
    console.log(name);
}

function exampleTwo(name: string = "Guest"): void {
    console.log(name);
}

exampleOne(); // undefined
exampleTwo(); // Guest

/*

? means the caller may omit this argument.
= means use this value when the argument is omitted or undefined.


What to remember most
----------------------
1. 'Return types' describe what a function gives back to its caller.
2. 'return' sends a value back; 'console.log()' only prints a value.
3. 'void' is appropriate when the function performs an action without returning a useful result.
4. 'never' describes a function that cannot complete normally.
5. 'Optional parameters (?)' may be omitted and become undefined when omitted.
6. 'Default parameters (=)' automatically provide a fallback when omitted or passed undefined.
7. When a function has many optional settings, an 'object parameter' often makes calls easier to read.

*/

// ======= Rest Parameters(...) =======
// A rest parameter allows a function to accept any number of arguments and collect them into a single array.

// WITHOUT REST PARAMETERS

function addThreeNumbers(
    a: number,
    b: number,
    c: number
): number {
    return a + b + c;
}

console.log(addThreeNumbers(10, 20, 30)); // 60


// WITH REST PARAMETERS

function addNumbers(...numbers: number[]): number {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

console.log(addNumbers(10, 20));           // 30
console.log(addNumbers(10, 20, 30));        // 60
console.log(addNumbers(10, 20, 30, 40));    // 100
console.log(addNumbers());                 // 0

/*
...numbers: number[]


- ... identifies numbers as a rest parameter.
- numbers is the parameter name.
- number[] specifies that the collected arguments form an array of numbers.

*/

// =======  Combining regular parameters with a rest parameter ========

// You can use required parameters before the rest parameter.

function introduce(
    name: string,
    ...hobbies: string[]
): void {
    console.log(`My name is ${name}.`);
    console.log("My hobbies are:", hobbies);
}

introduce("Smith", "coding", "reading", "cricket");

// My name is Smith.
// My hobbies are: [ 'coding', 'reading', 'cricket' ]

// 'hobbies' collects all remaining arguments into an array.
// Important rule: A rest parameter must be the last parameter in a function's parameter list. 
// You cannot put another ordinary parameter after it.

// ======== Rest parameters vs. array parameters ========

// rest-parameter version
function printRest(...numbers: number[]): void {
    console.log(numbers);
}

printRest(10, 20, 30); // [ 10, 20, 30 ]

// array-parameter version
function printArray(numbers: number[]): void {
    console.log(numbers);
}

printArray([10, 20, 30]); // [ 10, 20, 30 ]


/*
Rest parameter	
- printRest(10, 20, 30)	
- Accepts separate arguments	
- Collects arguments into an array	

Array parameter
- printArray([10, 20, 30])
- Accepts one array
- Receives an array directly
*/