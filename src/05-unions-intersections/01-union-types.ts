/*

What is a Union Type?

- A Union Type allows a variable to store more than one type of value.
- A variable can accept either one type OR another type.
- We use the pipe symbol (|) to define a union.

*/

// ****** union type: string or number

let userId: string | number;

userId = "UID01"; // valid
console.log(userId); 
userId = 100; // valid
console.log(userId);

// string | number means the variable accepts either a string or a number.

// ******* Function Parameters as union type

function printId(uid: string | number): void{
    console.log(`User ID : ${uid}`);
}

printId(1001);
printId("UID1001");

// the function accepts both string and number arguments.

// ******* Union with Multiple Types
let data: string | number | boolean;

data = "Hello";
data = 100;
data = true;

// All three types are allowed.

// ******** Type Narrowing *********

// Sometimes we need to perform different operations depending on the actual type.
// We can use 'typeof' to check the type.

function display(value: string | number): void {
    if (typeof value === "string"){
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2))
    }
}

display("typescript"); // TYPESCRIPT
display(100);          // 100.00

/*
- If the value is a string, convert it to uppercase.
- If the value is a number, format it to two decimal places.

This process is called Type Narrowing.

*/

//**** Can we use Union Types with return types?

// Answer: Yes. A function can return different types of values.

function getValue(): string | number {
    return Math.random() > 0.5 ? "Hello" : 100;
}

console.log(getValue());

//******  Can we use Union Types with arrays?

//Answer: Yes. There are two common meanings.

let values: (string | number)[] = [
    "Hello",
    100,
    "TypeScript"
];

console.log(values); // [ 'Hello', 100, 'TypeScript' ]

// This array can contain strings and numbers.

let values2: string[] | number[] = [1, 2, 3];

// This variable can hold either an array of strings or an array of numbers, but not a mixed array.

// ****** Can we use Union Types with object properties?

// Answer: Yes.

type User = {
    id: string | number;
    name: string;
};

let user1: User = {
    id: "US01",
    name: "Amit"
};

let user2: User = {
    id: 201,
    name: "Jyoti"
};

console.log(user1); // { id: 'US01', name: 'Amit' }
console.log(user2); // { id: 201, name: 'Jyoti' }


// *** Can we use Union Types with custom type aliases?

// Answer: Yes.

type ID = string | number;

let user_Id: ID = 101;

// ***** can we use a union type with two Type aliases?

// Yes

type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    department: string;
};

type EmployeeDetails = Person | Employee;

/*

Here:
- Person is one type.
- Employee is another type.
- EmployeeDetails accepts either Person OR Employee.
The | symbol means OR.

*/

const person: EmployeeDetails = {
    name: "John",
    age: 25
};

// This satisfies the 'Person' object type.
console.log(person);

const employee: EmployeeDetails = {
    employeeId: 101,
    department: "IT"
};

// This satisfies the 'Employee' object type
console.log(employee);

// both properties

const details: EmployeeDetails = {
    name: "John",
    age: 25,
    employeeId: 101,
    department: "IT"
};

console.log(details);

// *****  Can we use Union Types with Interfaces?

// Answer: Yes. We can create a Union Type using multiple interfaces.

interface Admin {
    role: string;
}

interface Customer {
    customerId: number;
}

type UserRole = Admin | Customer;

const userOne: UserRole = {
    role: "Admin"
};

console.log(userOne); // { role: 'Admin' }

const userTwo: UserRole = {
    customerId: 101
};

console.log(userTwo); // { customerId: 101 }

const userThree: UserRole = {
    role: "Admin",
    customerId: 102
};

console.log(userThree); // { role: 'Admin', customerId: 102 }

// ***** What is the difference between Union Types and 'any'?

/*
Answer:

Union Types allow only specified types.

'any' disables most TypeScript type checking.

*/

let a: string | number;
// a = true; // Error

let b: any;
b = true; // Allowed