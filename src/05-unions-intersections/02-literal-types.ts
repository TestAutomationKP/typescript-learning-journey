/*
What is a Literal Type?

A Literal Type allows a variable to accept only specific, fixed values.

Instead of allowing any string, we can restrict the variable to specific strings.

*/

/* without string literal type

let direction: string;

direction = "left";
direction = "right";
direction = "up";
direction = "down";

// we can also pass other values (means any string)
direction = "Amit" // valid but not meaningful
direction = " Mango" // valid but not meaningful

*/

// ******** String literal type

let direction: "left" | "right" | "up" | "down";

direction = "left";
direction = "down";

// direction = "center" // error
/*

The variable can only contain:
- left
- right
- up
- down

Other values are not allowed.

*/

// ******* Number Literal Types

let quantity: 1 | 2 | 3 | 4 | 5;

quantity = 1;  // Valid
quantity = 3;  // Valid

// quantity = 10; // Error
// Only the specified numbers are allowed.

// Real-World Example (User Status)
// Imagine you are developing a user management application.
// A user can have three possible statuses:

type UserStatus = "active" | "inactive" | "blocked";

let status: UserStatus; // 'status' is of type 'UserStatus'

status = "active";   // Valid
status = "blocked";  // Valid

// status = "pending"; // Error

// We created a type called 'UserStatus'.

// ********* Function parameters with Literal Types

type PaymentStatus = "success" | "failed" | "pending";

function processPayment(status: PaymentStatus): void {

    if (status === "success") {
        console.log("Payment completed!");
    } 
    else if (status === "failed") {
        console.log("Payment failed!");
    } 
    else {
        console.log("Payment is processing...");
    }

}

processPayment("success");
processPayment("pending");
//processPayment("inactive"); // error

/***** Note : Literal Types restrict values to specific allowed values. */

// ***** Can Literal Types be used as function return types?

// Answer: Yes.

function getStatus(): "success" | "failed" {
    return "success";
}

// ****** What is the difference between let and const for Literal Types?


let color = "red";
// string

const color2 = "red";
// "red"

// A const variable cannot be reassigned, so TypeScript can preserve its literal type.


// ****** What is Type Widening?

// Answer: Type Widening happens when TypeScript infers a broader type instead of keeping a specific literal type.

let statusInfo1 = "active";
// let statusInfo: string. Inferred as string
// Because a let variable can be reassigned, TypeScript generally infers a broader type 
// that permits other values of the same primitive category.

// But:

const statusInfo2 = "active";
// const statusInfo: "active". Inferred as "active"

// ****** How are Literal Types useful in API development?

// Answer: They restrict API parameters and responses to predefined values.

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

// ******  What is a Template Literal Type?

// Answer: It creates new string types using template literal syntax.

type Color = "red" | "blue";

type ColorMessage = `Color is ${Color}`;

// Possible values:

//1. "Color is red"

//2. "Color is blue"

// **** How can we get a Union of Literal Types from an object?

// Answer: We can use typeof and keyof.

const roles = {
    ADMIN: "admin",
    USER: "user",
    GUEST: "guest"
} as const;

type Role = typeof roles[keyof typeof roles];


//Role becomes "admin" | "user" | "guest".

// ******* What is the difference between keyof and typeof in this example?

/*
Answer:

typeof roles obtains the type of the object.

keyof typeof roles obtains its property names.

Indexing with [keyof typeof roles] obtains the union of its property values.
*/