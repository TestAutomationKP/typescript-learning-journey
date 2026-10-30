// What is a type alias?

// A 'type alias' gives a name to a type so you can reuse it.
// Instead of writing the same object type repeatedly, you define it once with the type keyword.

// ===== A. Without a type alias ======

const user1: {
  name: string;
  age: number;
} = {
  name: "Amit",
  age: 25,
};

const user2: {
  name: string;
  age: number;
} = {
  name: "Priya",
  age: 24,
};

// Both variables repeat the same user structure. Imagine if there are having 100 users!

// ===== B. With a 'type alias' =========

// Define the structure
type User = {
    name: string;
    age: number;
};

// Reuse it
const userOne: User = {
    name: "Ravi",
    age: 21,
};

// Reuse it
const userTwo: User = {
    name: "Raju",
    age: 25,
};

// Now the structure is defined once and reused.
// Think of User as a reusable description or contract for the shape of a user object. It does not create a runtime object or a new JavaScript class.

// ===== C. Type aliases with optional properties ======

// You can combine type aliases with the 'optional properties' you learned earlier.

// define the product structure
type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;
};

const product1: Product = {
  id: 1,
  name: "Keyboard",
  price: 1500,
};

const product2: Product = {
  id: 2,
  name: "Mouse",
  price: 700,
  description: "Wireless mouse",
};

// Both objects are valid because description is optional.

// ======= D. Type aliases with functions ======

// You can reuse a type alias to describe objects that contain methods.

type UserInfo = {
  name: string;
  greet: () => string;
};

const user: UserInfo = {
  name: "Amit",
  greet: () => {
    return "Hello!";
  },
};

console.log(user.greet()); // Hello!

// Another Example

type Calculator = {
    operationType: string;
    operation: (a: number, b: number) => number;
};

const add: Calculator = {
    operationType: "Addition",
    operation: (a, b) => a + b,
};

const sub: Calculator = {
    operationType: "Subtraction",
    operation: (a, b) => a - b,
};

const mul: Calculator = {
    operationType: "Multiplication",
    operation: (a, b) => a * b,
};

const div: Calculator = {
    operationType: "Division",
    operation: (a, b) => a / b,
};


console.log(add.operation(8,5)); // 13
console.log(sub.operation(8,5)); // 3
console.log(mul.operation(8,5)); // 40
console.log(div.operation(8,5)); // 1.6

// One improvement: restrict operationType
// You can make it safer by using a union type (only permitted values)

type CalculatorV1 = {
    operationType: "Addition" | "Subtraction" | "Multiplication" | "Division";
    operation: (a: number, b: number) => number;
};

const addOp: CalculatorV1 = {
    operationType: "Addition",
    operation: (a, b) => a + b,
};

const subOp: CalculatorV1 = {
    operationType: "Subtraction",
    operation: (a, b) => a - b,
};

const mulOp: CalculatorV1 = {
    operationType: "Multiplication",
    operation: (a, b) => a * b,
};

const divOp: CalculatorV1 = {
    operationType: "Division",
    operation: (a, b) => a / b,
};


console.log(addOp.operation(8,5)); // 13
console.log(subOp.operation(8,5)); // 3
console.log(mulOp.operation(8,5)); // 40
console.log(divOp.operation(8,5)); // 1.6

// A cleaner alternative: use one calculator object

// current approach is perfectly fine for learning. 
// But if you want to group all four operations together, you could write:

type CalculatorV2 = {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number;
};

const calculator: CalculatorV2 = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
};

console.log(calculator.add(25, 5));      // 30
console.log(calculator.subtract(25, 5)); // 20
console.log(calculator.multiply(10, 5)); // 50
console.log(calculator.divide(85, 5));   // 17

// ======= E. Type aliases with nested objects ========

type Address = {
  city: string;
  country: string;
};

type Employee = {
  id: number;
  name: string;
  address: Address;
};

const employee: Employee = {
  id: 101,
  name: "Priya",
  address: {
    city: "Gurugram",
    country: "India",
  },
};

console.log(employee.address.city); // Gurugram

// Notice that the Address type is reused inside Employee. This makes your code easier to read and maintain.

// ====== F. Type aliases with union types =======

// A type alias is not limited to objects. It can describe other kinds of types, too.

// describe status structure
type Status = "pending" | "approved" | "rejected";

type Order = {
  id: number;
  status: Status;
};

const order: Order = {
  id: 1,
  status: "approved",
};

// Error: "completed" isn't an allowed Status
// order.status = "completed";


// This is useful when a property should accept only a specific set of values.

/*

When should you use a type alias?
Use type when you want to:

- Reuse an object structure.
- Define union types such as "success" | "error".
- Create function type names.
- Compose complex types from simpler types.
- Use 'type' when defining unions, intersections, function types, or other type expressions.

Next, we'll learn interface, another common way to describe object structures.

Question: Can we declare same 'type alias' name more than once in the same scope? 
Answer: No, but (remember) we can declare the same 'interface' name more than once in the same scope

*/

// ====== Type aliases can combine/extend structures with intersections (&) ========
type Person = {
  name: string;
};

type Worker = Person & {
  salary: number;
};

type Employer = Worker & {
    businessType: string;
};

const worker: Worker = {
    name: "Amit",
    salary: 2400,
};

console.log(worker.name);
console.log(worker.salary);

const workerOne: Employer ={
    name: "Ravi",
    salary: 15000,
    businessType: "textile",
};

console.log(workerOne.name);
console.log(workerOne.salary);
console.log(workerOne.businessType);