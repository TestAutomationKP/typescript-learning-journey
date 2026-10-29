console.log("======= if statement ======");
/*
 The 'if' statement executes a block of code only when a condition is 'true'.
    if (condition) {
        // Code executes if condition is true
    }
*/

let age: number = 20;

if(age >= 18){
    console.log("You are eligible for vote");
}

// output:You are eligible for vote

console.log("==== if.... else statement ====");
/*
The if...else statement executes one block if the condition is 'true' and another block if it is 'false'.
*/

age = 16;

if(age >= 18){
    console.log("You are a adult");
} else {
    console.log("You are a minor");
}

// output:You are a minor

console.log("======if...else if .....else =======");

let marks: number = 75;

if(marks >= 90){
    console.log("Grade A");
}else if(marks >= 75){
    console.log("Grade B");
}else if(marks >= 50){
    console.log("Grade C");
}else{
    console.log("Failed");
}

// Important: Conditions are checked from top to bottom. 
// Once a condition is true, its block executes and the remaining branches are skipped.

console.log("====== Switch....case ====");

// The 'switch' statement compares an expression with different 'case' values. 
// It is useful when selecting from several possible options.

let day: string = "Wednesday";

switch(day){
    case "Monday":
        console.log("1st day of the week");
        break;
    
    case "Tuesday":
        console.log("2nd day of the week");
        break;

    case "Wednesday":
        console.log("3rd day of the week");
        break;

    case "Thursday":
        console.log("4th day of the week");
        break;

    case "Friday":
        console.log("5th day of the week");
        break;

    case "Saturday":
        console.log("6th day of the week");
        break;

    case "Sunday":
        console.log("7th day of the week");
        break;
    
    default:
        console.log("Invalid day");
}

/*
Key points:
- 'case' specifies a value to match.
- 'break' exits the switch statement.
- 'default' executes when no case matches.
- Without 'break', execution can continue into the next case

*/

console.log("====== while loop =====");
// A while loop repeatedly executes a block as long as its condition is true.

/*
 while (condition) {
    // Repeated code
    }
 */

let i: number = 1;

while(i <= 5){
    console.log(i);
    i++;
}

// Note: The condition is checked before every iteration. 
// If it is false at the beginning, the loop will not execute even once.

console.log("==== do while loop =====");

// A do...while loop executes its block first and checks the condition afterward.

let x: number = 10;

do{
    console.log("execute me !!!");
}while(x <= 5);

// while loop vs do...while loop
// Main difference: A do...while loop always executes 'do' block at least once, even when the condition is initially false.

console.log("==== for loop =====");

for(let i: number = 1; i <= 10; i++){
    console.log(i);
}

/*
The three parts are:

- Initialization: let i = 1 — runs once at the beginning.
- Condition: i <= 10 — checked before each iteration.
- Update: i++ — runs after each iteration.
*/

console.log("==== for...of loop =====");

// The for...of loop iterates over the values of an iterable, such as an array or string.

let fruits: string[] = ["Mango", "Banana", "Apple", "Orange"];

for(const fruit of fruits){
    console.log(fruit);
}

// String — process characters in a username

let myName: string = "KP2026";

for(const char of myName){
    console.log(char);
}

// ===== each iteration gives you one character from the string

// For example, you could count the number of digits in a username:

let digitCount: number = 0;

for(const char of myName){
    if(char >= "0" && char <= "9"){
        console.log(char);
        digitCount++;
    }
}

console.log(`Total digits : ${digitCount}`);

// ==== Set — process unique email addresses
/*
Real-world use: removing duplicates from user registrations or collecting unique tags.

A 'Set' stores unique values. If you add the same value multiple times, it stores it only once.
*/

const emails = new Set<string>([
    "kp@abc.com",
    "alex@xyz.com",
    "smith@abc.com",
    "alex@xyz.com",
    "kp@abc.com"
]);

for(const email of emails){
    console.log(email);
}
/*
Output:
kp@abc.com
alex@xyz.com
smith@abc.com

Observation: duplicate emails are automatically excluded.
*/

const permissions = new Set<string>([
    "read",
    "write",
    "delete"
]);

for (const permission of permissions) {
    console.log(`User has ${permission} permission`);
}

// ======= Map — process product prices
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
    console.log(`${product}: ₹ ${price}`)
}

// The [product, price] syntax uses array destructuring to extract them.

/*
Laptop: ₹ 15000
Mobile: ₹ 7000
Keyboard: ₹ 800
Mouse: ₹ 500
*/

// ==== Array of objects — process customer orders
// Real-world use: e-commerce applications, order management, and dashboards.
// This is one of the most useful patterns in everyday TypeScript development.

type Order = {
    id: number;
    customer: string;
    amount: number;
};

const orders: Order[] = [
    {
        id: 101,
        customer: "Rahul",
        amount: 1000
    },
    {
        id: 102,
        customer: "Rajiv",
        amount: 2400
    },
    {
        id: 103,
        customer: "KP",
        amount: 5000
    },
];

for(const order of orders){
    console.log(order);
}

/*

{ id: 101, customer: 'Rahul', amount: 1000 }
{ id: 102, customer: 'Rajiv', amount: 2400 }
{ id: 103, customer: 'KP', amount: 5000 }
*/
for(const order of orders){
    console.log(
        `ORDER #${order.id}: ${order.customer} paid ₹${order.amount}`
    );
}

console.log("==== for...in loop =====");

const cities: string[] = ["Delhi", "Mumbai", "Bangalore"];

for(const city of cities){
    console.log(city);
}
/* Output

Delhi
Mumbai
Bangalore
*/
for(const index in cities){
    console.log(index);
}
/* Output

0
1
2
*/
// for...of vs for...in
// Use 'for...of' when you want values. Use 'for...in' when you want enumerable property keys

// ==== Generator function — process data step by step
/**
Real-world use: streaming records, generating sequences, or processing data lazily.
A generator function uses yield to produce values one at a time.
*/

function* generateTicketNumbers(){
    yield "TICKET-101";
    yield "TICKET-102";
    yield "TICKET-103";
}

for(const ticket of generateTicketNumbers()){
    console.log("Processing : ", ticket);
}

// Unlike returning a complete array, a generator can produce each value when the loop requests it.

console.log("==== break statement =====");
// The break statement immediately terminates the nearest enclosing loop or switch statement.

for(let i = 1; i <= 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}
/* output
1
2
3
4

When i becomes 5, the loop stops.
*/

console.log("==== continue statement =====");
// The continue statement skips the rest of the current loop iteration and moves to the next iteration.

for(let i = 1; i <= 5; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
}

/*
1
2
4
5

The number 3 is skipped, but the loop continues.
*/