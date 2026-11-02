/*
What is an Intersection Type?

An Intersection Type combines multiple types into one type.

A variable must contain the properties of Type A AND Type B.

We use the ampersand symbol (&) to define an intersection.

Intersection (&) means AND.

*/

// ******* Combining Two Object Types

// Let's create two types:


type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    department: string;
};

// Now combine them:

type EmployeeDetails = Person & Employee;

// Here, EmployeeDetails contains all properties from both types.

let employee: EmployeeDetails = {
    name: "John",
    age: 25,
    employeeId: 101,
    department: "IT"
};

console.log(employee); // { name: 'John', age: 25, employeeId: 101, department: 'IT' }

/*

The EmployeeDetails type requires:

From Person:
- name
- age

From Employee:
- employeeId
- department

All four properties are **mandatory.

*/

// ***** Combining Multiple Types

// You can combine more than two types.

type PersonInfo = {
    name: string;
};

type EmployeeInfo = {
    employeeId: number;
};

type Manager = {
    teamSize: number;
};

type ManagerDetails = PersonInfo & EmployeeInfo & Manager;

let manager: ManagerDetails = {
    name: "David",
    employeeId: 101,
    teamSize: 10
};

console.log(manager); // { name: 'David', employeeId: 101, teamSize: 10 }

// ****** Can we use Intersection Types to extend existing object types?

// Answer: Yes.

type User = {
    name: string;
};

type Admin = User & {
    permissions: string[];
};