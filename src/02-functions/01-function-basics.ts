// function declaration

// A function is a reusable block of code that performs a specific task. 
// It can accept input, process that input, and optionally return a result.

function addNumbers(): void{
    console.log(10 +20);
}

addNumbers(); // 30


function greet(): string{
    return "Hello, TypeScript";
}

console.log(greet());

/*
Here:
- function — keyword used to declare a function.
- addNumbers/greet — function name.
- () — holds parameters, if any.
- void/string — indicates that the function does not return or return a meaningful value based on the specified type.
- {} — contains the function body.
- addNumbers()/greet() — calls or executes the function.

Important: Defining a function does not execute it. You must call it unless another mechanism invokes it.

*/

/*
======== function declaration with parameters ========

 - function name : calculateTotal
 - parameters: price, quantity
 - function body : price * quantity
 - return value : a number value

*/

function calculateTotal(price: number, quantity: number): number{
    return price * quantity;
}

console.log(calculateTotal(500, 10));
console.log(calculateTotal(600, 50));

// ======== calling functions ===

// Calling a function means executing it by using its name followed by parentheses

const total1 = calculateTotal(100, 3);
const total2 = calculateTotal(250, 2);

console.log(typeof(calculateTotal)); // function
console.log(typeof(total1)); // number

console.log(total1); // 300
console.log(total2); // 500

/*
Understand these terms:

- Parameter: A variable declared in a function definition, such as price.
- Argument: A value supplied when calling the function, such as 100.
- Return value: The result produced by the function, such as 300.

A function can be called many times with different arguments.

*/

// ====== function declaration vs function expression ======

// function declaration
function subtract(a: number, b: number): number{
    return a - b;
}

console.log(subtract(23, 12)); // 11

// Function expression - store a function inside a variable
// A 'function expression' happens when a function is assigned as a value to a variable (using const, let, or var).

const multiply = function(a: number,b: number): number{
    return a * b;
};

console.group(multiply); // [Function: multiply]. Note, the value is a function, it is NOT number (return type)
console.log(multiply(5, 7));
console.log(multiply(15, 6));

/*
The main difference is how they are defined and initialized.

A 'function declaration' is generally available throughout its enclosing scope because of function hoisting. 
A 'function expression' assigned to a const variable cannot be called before that variable is initialized.
*/

// Function declaration: available everywhere in scope

/* 

A function declaration is created using the 'function' keyword as a standalone statement. 
Because the entire function definition is hoisted during the setup phase,you can invoke the function 
before the line where it is written in your code. 

*/

// Example: function declaration Hoisting

// works perfectly: Carefully notice here: We are calling the function before its defination
const result = sum(12,13);
console.log(result);

// The actual function declarion is written down here
function sum(a:number, b: number): number{
    return a + b;
}


// Function expression assigned to const: CANNOT be called before its declaration

/*
Trying to call before initialization

const multiResult = multiplyNumbers(5, 6); // Error

- ReferenceError: Block-scoped variable 'multiplyNumbers' used before its declaration.
- Variable 'multiplyNumbers' is used before being assigned

*/

// The variable assignment happens here
const multiplyNumbers = function(a: number, b: number): number{
    return a * b;
};

// works pefectly
console.log(multiplyNumbers(12, 5));
const multiResult = multiplyNumbers(5, 6);
console.log(multiResult);

console.log("====== counter ======")
let count = 0;

/* named function (or function declaration)

function counter(): number{
    count++;
    return count;
}

*/


// function expression
const counter = function(): number{
    count++;
    return count;
}

console.log(counter);   // [Function: counter]. Means the value is a function
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4

// ===== Anonymous Arrow function expression =======

// Arrow functions provide a concise syntax using =>. They are widely used in modern TypeScript.

const divideResult = (a: number, b: number): number => {
    return a / b;
}

// print the value that is stored in the variable
console.log(divideResult); // [Function: divideResult]. means the value is a function

// call the function
console.log(divideResult(8, 2)); // 4

/*
- a variable can store a function, and a function can be called using that variable's name
- const declares a variable that cannot be reassigned.
- divideResult is the variable's name. 
- 'divideResult' is a constant variable that holds a function.
- (a: number, b: number) defines the function's parameters.
- => introduces the arrow function's body.
- return a / b specifies what the function produces when called.
*/

// storing a function and storing a result

const a = divideResult;        // stores the function
const b = divideResult(10, 2); // stores the result : 5

console.log(a); // [Function: divideResult]
console.log(b); // 5, print the result

// call the function with different arguments

console.log(a(15,3)); // same as console.log(divideResult(15,3))
console.log(a(50,5)); // same as console.log(divideResult(50,5))
console.log(a(45,9)); // same as console.log(divideResult(45,9))

// For a single expression, you can omit the braces and return keyword.
// const result = (a: number, b: number): number => a / b;

/*

// Named function ( function declaration)
function square(n: number): number{
    return n * n;
}

//Anonymous standard function expression
const square = function(n: number): number{
    return n * n;
}

*/

// Anonymous Arrow function expression
console.log("===== Arrow Function Expression =====");

const square = (n: number): number => n * n;
console.log(square(6));


let anothercounter: number = 0;
const increment = (): void => {
    anothercounter++;
    console.log(anothercounter);
}

//console.log(`Value of anothercounter : ${anothercounter}`); // 0
increment(); // 1
//console.log(`Value of anothercounter : ${anothercounter}`); // 1
increment(); // 2
//console.log(`Value of anothercounter : ${anothercounter}`); // 2
increment(); // 3

// Arrow functions with one or zero parameters

const greetYou = (name: string): string => `Hello, ${name}`;
const getVersion = (): string => "1.0.3";
const getCurrentYear = (): number => new Date().getFullYear();
const double = (n: number): number => n *  2;

console.log(greetYou("TypeScript")); // Hello, TypeScript
console.log(getVersion()); // 1.0.3
console.log(getCurrentYear()); // 2026
console.log(double(4)); // 8

const add_v1 = (a: number, b: number) => a + b;
console.log(add_v1(10, 5)); // 15
/*
Here:
- (a: number, b: number) defines the two parameters.
- => introduces the arrow function's body.
- a + b is evaluated and returned automatically because the body is a single expression without curly braces. 
*/

const add_v2 = function(a: number, b: number) {
    return a + b;
};

console.log(add_v2(10, 5)); // 15

/*

Here:
- function defines a function expression.
- (a: number, b: number) defines the parameters.
- { } contains the function body.
- return a + b explicitly returns the result.

*/

// ===== Scope in function ========
console.log("===== Scope in function =====")
// scope determines where a variable can be accessed
/*
Block scope: A variable is accessible only inside the { } block in which it is declared.

Function scope: A variable is accessible throughout the function in which it is declared, 
                subject to its declaration and initialization rules.
*/

// 'let' and 'const' are block-scoped

function checkAge(): void{
    const age = 20;

    if(age >= 18){
        let yourStatus = "Adult";
        const msgForYou = "You are Eligible";

        console.log(yourStatus); // Adult
        console.log(msgForYou); // You are Eligible
    }

    //console.log(yourStatus); // Error: Cannot find name 'yourStatus'
    //console.log(msgForYou);  // Error: Cannot find name 'msgForYou'

    console.log(age); // 20
}

// call to function
checkAge();

// NOTE : status and message are accessible only inside this 'if' block.

// Another example

function testScope(): void{
    for(let i = 0; i < 3; i++){
        console.log(i);
    }

    // console.log(i); // Error
}

testScope(); // 0 1 2

// var is function-scoped

function checkAgeOne(): void{
    var myage = 20;
    var urStatus = "Minor";

    if(myage >= 18){
        urStatus = "Adult";

        console.log(urStatus); // Adult
    }

    console.log(urStatus); // Adult
}

checkAgeOne();
/*
Why can we access status outside the if block?

Because 'var' ignores ordinary block boundaries such as if, for, and while. Its scope is the containing function.

*/

// Another example: with var

function testScopeAnother(): void{
    for(var i = 0; i < 3; i++){
        console.log(i);
    }

     console.log(i); // 3
}

testScopeAnother(); // 0 1 2 3


// improved version for modern TypeScript

// const is generally preferable to let in modern TypeScript when a variable does not need to be reassigned. 
// Use let when reassignment is necessary.

function checkAgeSecond(): void {
    const myage2 = 20;
    let urStatus2 = "Minor";

    if(myage2 >= 18){
        urStatus2 = "Adult";
        console.log(urStatus2); // Adult
    }

    console.log(urStatus2); // Adult
}

checkAgeSecond()


// ====== Function closure =======
console.log("===== Function closure =====")
// A closure is a function together with access to the variables from its surrounding lexical scope.

// Let's consider this code ( function call inside function)

function outerFunction(): void{
    let message = "Hello from the outer function";

    function innerFunction(): void{
        console.log(message);
    }

    // calling inner function
    innerFunction();
}

// call the function
outerFunction();

// innerFunction() can access 'message' because it is declared in the surrounding scope

// Anther example

function outerCounter(): number{
    let count = 0;

    function innerCounter(): number{
        count++;
        return count;
    }

    // it calls inner function (innerCounter) and returns its result 1 (return type : number)
    return innerCounter();
}

const countOne = outerCounter();
const countTwo = outerCounter();

console.log(countOne); // 1
console.log(countOne); // 1
console.log(countOne); // 1
console.log(countTwo); // 1
console.log(countTwo); // 1
console.log(countOne); // 1

// Note that, countOne and countTwo : storing the returned number, NOT the INNER FUNCTION

// Now, we will change the retun statement to RETURN THE FUNCTION rather than CALL IT !!!

console.log("==== function closure using 'named function' =====");

function outerCounter1(): () => number{
    let count = 0;

    function innerCounter1(): number{
        count++;
        return count;
    }

    // return the function, don't call the function. remove bracket '()'.
    // Hence, return type of function 'outerCounter1' will be a function i.e. () => number
    return innerCounter1;
}

const countOne_1 = outerCounter1();
const countTwo_1 = outerCounter1();

// check whether both const store the inner functions or not
console.log(countOne_1); // [Function: innerCounter1]
console.log(countTwo_1); // [Function: innerCounter1]

// call the function and displays the returned value
console.log(countOne_1()); // 1
console.log(countOne_1()); // 2
console.log(countOne_1()); // 3

console.log(countTwo_1()); // 1
console.log(countTwo_1()); // 2

console.log(countOne_1()); // 4


// Improvised version of above code using 'function expression'
console.log("==== function closure using 'function expression' =====");

function outerCounter_one(): () => number{
    let count = 0;

    return function(): number{
        count++;
        return count;
     };
}

/* (): () => number 

It means The outer function(outerCounter_one) takes no arguments and 
returns a function that takes no arguments and returns a number.

The returned function (i.e. the inner function) retains access to the outer function's count variable. That's the closure.

Return types: The outer function returns a function.
Closures: The returned function retains access to its surrounding variable.

*/
const countOne_2 = outerCounter_one();
const countTwo_2 = outerCounter_one();

console.log(countOne_2); // [Function (anonymous)]
console.log(countTwo_2); // [Function (anonymous)]

// call the function and displays the returned value
console.log(countOne_2()); // 1
console.log(countOne_2()); // 2
console.log(countOne_2()); // 3

console.log(countTwo_2()); // 1
console.log(countTwo_2()); // 2

console.log(countOne_2()); // 4


// Improvised version of above code using 'Arrow function expression'
console.log("==== function closure using 'Arrow function expression' =====");
function outerCounter_two(): () => number{
    let count = 0;

    return (): number => ++count;
    // try with 'count++' and observe what happens
}

const countOne_3 = outerCounter_two();
const countTwo_3 = outerCounter_two();

console.log(countOne_3); 
console.log(countTwo_3); 

// call the function and displays the returned value
console.log(countOne_3()); // 1
console.log(countOne_3()); // 2
console.log(countOne_3()); // 3

console.log(countTwo_3()); // 1
console.log(countTwo_3()); // 2

console.log(countOne_3()); // 4