// An object type describes which properties an object should have and what types those properties should contain.

// Defining an object type

const student: {
    name: string;
    age: number;
    isEnrolled: boolean;
} = {
    name: "Ravi",
    age: 21,
    isEnrolled: true,
};

/*
- student is the variable name.
- The colon after 'student' (i.e. student: ) introduces its type annotation.
- { name: string; age: number } is the object type.
- The object on the right provides the actual values.
*/

console.log(student.name);
console.log(student.age);
console.log(student.isEnrolled);

// ===== What happens when the type doesn't match? =====

// Incase of incorrect property type

/*

const user: {
  name: string;
  age: number;
} = {
  name: "Amit",
  age: "25", // Error
};

// age must be a number, but "25" is a string.

*/

// correct object: Both properties have the expected types.

const user: {
  name: string;
  age: number;
} = {
  name: "Amit",
  age: 25,
};

console.log(user.age);
console.log(user.name);

// Missing required property

/*

const anotherUser: {
  name: string;
  age: number;
} = {
  name: "Amit",
  // Error: Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'
};

*/

// Unexpected property in a fresh object literal

/*

const userOne: {
  name: string;
  age: number;
} = {
  name: "Amit",
  age: 25,
  city: "Delhi", // Error
};

// Error: Object literal may only specify known properties, and 'city' does not exist in type '{ name: string; age: number; }'

*/

// ===== Optional properties (?) in object structure =======

// Sometimes an object doesn't need every property. For example, a user may have a phone number, but it isn't mandatory.
const userOne: {
    name: string;
    age: number;
    phone?: string;
} = {
    name: "Ravi",
    age: 20,
};

console.log(userOne.name);  // Ravi
console.log(userOne.phone); // undefined

// The ? after phone means the property may be absent.
// Important: An optional property can be absent, but when supplied, its value must match the property's declared type. 
// With 'strictNullChecks' enabled, reading an optional property can produce undefined.

// ====== Readonly properties =====

// Use 'readonly' when you want to prevent a property from being reassigned after initialization.

const userAnother:{
    readonly id: number;
    name: string;
} = {
    id: 101,
    name: "Ravi",
};

console.log(userAnother.name); // Ravi
userAnother.name = "Amit";     // reassigned with other value ALLOWED
console.log(userAnother.name); // Amit

console.log(userAnother.id); // 101
// userAnother.id = 102; // Error: Cannot assign to 'id' because it is a read-only property

// 'readonly' is a compile-time restriction. It doesn't automatically freeze the object at runtime.


// ======= Object types with functions =======

// An object can contain functions as properties. These are often called methods.

const calculator: {
    add: (a: number, b: number) => number;
} = {
    add: (a, b) => {
        return a + b;
    },
};

console.log(calculator.add(4, 5)); // 9

/*

Here:
- a: number and b: number describe the parameters.
- => number means the function returns a number.
- The implementation calculates and returns the sum.

*/

// ====== Nested object types =======

// You can specify the type of an object inside another object.

const employee: {
    name: string;
    address:{
        city: string;
        pincode: number;
    },
} = {
    name: "Suman",
    address:{
        city: "Mumbai",
        pincode: 777001,
    },
};

console.log(employee.name); //Suman
console.log(employee.address.city);    // Mumbai
console.log(employee.address.pincode); // 777001

// 1. What is the type of address?

/*

The type of employee.address is:
{
  city: string;
  pinCode: number;
}

In other words, 'address' is a nested object whose type is defined by its properties.

*/

// 2. Does 'const' affect the type of 'address'?

// No. The const keyword applies to the variable 'employee', not automatically to every property inside its object.

employee.address.city = "Delhi"; // Allowed
employee.address.pincode = 400001; // Allowed

console.log(employee.address.city);    // Delhi
console.log(employee.address.pincode); // 400001


// 3. Can you replace the nested 'address' object ?

employee.address = {
  city: "Pune",
  pincode: 411001,
}; // Allowed

console.log(employee.address.city);    // Pune
console.log(employee.address.pincode); // 411001

// This is allowed because employee still refers to the same outer object. Only its address property has changed.


// 4. How can you get the type of address separately?

// You can define its type explicitly using a 'type alias':

type Address = {
    city: string;
    pincode: number;
};

type Employee = {
    name: string;
    address: Address;
};

const employeeOne: Employee = {
    name: "Rajeev",
    address: {
        city: "Gurugram",
        pincode: 200001,
    },
};

const employeeTwo: Employee = {
    name: "Raju",
    address: {
        city: "Chennai",
        pincode: 300001,
    },
};

console.log(employeeOne.name);    
console.log(employeeOne.address.city);    
console.log(employeeOne.address.pincode); 


console.log(employeeTwo.name);    
console.log(employeeTwo.address.city);    
console.log(employeeTwo.address.pincode);

// This is useful when multiple employees share the same address structure.