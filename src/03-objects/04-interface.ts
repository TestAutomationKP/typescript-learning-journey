/*
What is an interface?
- An interface describes the structure that an object should follow.
- It tells TypeScript, which properties and methods an object must have, and what types they should use.
- For object shapes, an interface often serves the same purpose as a type alias.
*/

interface Person {
  name: string;
  age: number;
  isActive: boolean;
}

const userOne: Person = {
  name: "Amit",
  age: 25,
  isActive: true,
};

console.log(userOne.name);     // Amit
console.log(userOne.age);      // 25
console.log(userOne.isActive); // true

const userTwo: Person = {
  name: "Ravi",
  age: 26,
  isActive: false,
};

console.log(userTwo.name);     // Amit
console.log(userTwo.age);      // 25
console.log(userTwo.isActive); // true

/*

Let's break it down:
- 'interface User' declares an interface named User.
- name: string requires a string property.
- age: number requires a number property.
- isActive: boolean requires a boolean property.
- 'const user: User' tells TypeScript to check the object against the interface.

If a required property is missing or has an incompatible type, TypeScript reports an error.

*/

// ===== B. Optional properties in interfaces =====

// Just like object types and type aliases, interfaces support optional properties.


interface UserInfo {
  name: string;
  age: number;
  email?: string;
}

const user1: UserInfo = {
  name: "Amit",
  age: 25,
};

const user2: UserInfo = {
  name: "Priya",
  age: 24,
  email: "priya@example.com",
};


console.log(user1.name);  // Amit
console.log(user1.email); // undefined

console.log(user2.name);  // Priya
console.log(user2.email); // priya@example.com

user1.email = "abc@abc.com";
console.log(user1.email); // abc@abc.com

//Both objects are valid. The email property is optional because of ?.

// ========= C. Readonly properties in interfaces ======

interface Product {
  readonly id: number;
  name: string;
  price: number;
}

const product: Product = {
  id: 101,
  name: "Keyboard",
  price: 1500,
};

console.log(product.id);
console.log(product.name);
console.log(product.price);

product.name = "Mechanical Keyboard"; // Allowed
product.price = 1800;                  // Allowed

// Error: id cannot be reassigned
// product.id = 102; // NOT allowed

console.log(product.id);
console.log(product.name);
console.log(product.price);

// This is useful for identifiers or other properties you don't want accidentally reassigned through that type.

// ====== D. Interfaces with methods (functions) ======

// An interface can describe methods an object must provide.

interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

const calculator: Calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },
};

console.log(calculator.add(10, 5));      // 15
console.log(calculator.subtract(10, 5)); // 5

/*

The interface specifies the method names, parameters, and return types. The object supplies the actual implementations.
This is particularly useful when different objects should provide the same set of operations.

*/

// ===== E. Extending an interface =======

// One of the most useful features of interfaces is extends.

// Suppose you have a basic user and want to create an admin with all the user properties plus an additional property.

interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
  permissions: string[];
}

const user: User = {
    name: "Raju",
    age: 30,
};

const admin: Admin = {
  name: "Amit",
  age: 25,
  role: "Administrator",
  permissions: ["read", "write", "delete"],
};

console.log(user.name);        // Raju
console.log(user.age);         // 30


console.log(admin.name);        // Amit
console.log(admin.age);         // 25
console.log(admin.role);        // Administrator
console.log(admin.permissions); // [ 'read', 'write', 'delete' ]


// Admin extends User means that Admin inherits the required structure of User and adds its own properties.

// ====== You can also extend multiple interfaces: ====== 

interface Timestamped {
  createdAt: Date;
}

interface Identifiable {
  readonly id: number;
}

interface RecordItem extends Timestamped, Identifiable {
  name: string;
}

const record: RecordItem = {
  id: 1,
  name: "Example",
  createdAt: new Date(),
};

console.log(record.id);     // 1
console.log(record.name);   // Example
console.log(record.createdAt); // Date time here

// ====== F. Interface declaration merging ========

// TypeScript allows you to declare the same interface name more than once. 
// Compatible declarations are merged automatically.

interface User_Info {
  name: string;
}

interface User_Info {
  age: number;
}

const user_1: User_Info = {
  name: "Amit",
  age: 25,
};


// The resulting 'User_Info' interface requires both properties.

// This is an important difference from ordinary 'type aliases', which cannot be redeclared under the same name in the same scope.

