// What is an object?
// An object is a collection of related data stored as key-value pairs.

// store information about a student WITHOUT using object

const studentName: string = "Amit";
const studentAge: number = 15;
const studentIsEnrolled: boolean = true;

console.log(studentName); // Amit
console.log(studentAge);  // 15
console.log(studentIsEnrolled); // true

// All these variables are separate. 
// But an object lets us group all this related information together

const student = {
    name: "Amit",
    age: 15,
    isEnrolled: true
};

console.log(student); // { name: 'Amit', age: 15, isEnrolled: true }

/*

Here, student is the object variable.

- name, age, and isEnrolled are keys (property names).
- "Rahul", 21, and true are their values.
- Each key-value pair is called a property.

*/

// ======= Accessing object properties ========

// 1. Dot notation

console.log(student.name);
console.log(student.age);
console.log(student.isEnrolled);

// 2. Bracket notation
const key = "name"
console.log(student[key]);

/*

Dot notation is the most common when you know the property name.
Bracket notation is useful when the property name is stored in a variable

*/

// ====== Adding and updating properties =======

// You can change an existing property 

// update a property
student.age = 16;

console.log(student); // { name: 'Amit', age: 16, isEnrolled: true }

// we will discuss later, how to add a new property
// ** NOTE : TypeScript adds static type checking to help prevent mistakes

// In JavaScript, you can generally add properties ( for example, adding a new property city to student object, student.city = "Gurugram") to objects without 
// defining their structure beforehand

// ===== Removing a property ======

// Use the delete operator

// delete student.isEnrolled; // TypeScript may reject deleting a required property under stricter checks

// ======= Objects can contain different data types =======

// Objects can store strings, numbers, booleans, arrays, and even other objects.

const employee = {
    name: "KP",
    age: 10,
    isFullTime: true,
    skills: ["Java", "Python", "TypeScript"],
    address: {
        city: "Delhi",
        country: "India"
    }
};

console.log(employee.name);            // KP
console.log(employee.skills[1]);       // Python
console.log(employee.address.country); // India

// he address property is itself an object. This is called a nested object.

// ======= Objects and const =========

// A common beginner question is: if an object uses const, why can its properties change?

const user = {
    name: "Amit",
    city: "Mumbai"
};

// **Note that the object varible 'user' is a const variable. Hence, const prevents reassignment of the user variable

// user = {name: "Amitabh", city: "Mumbai"}; // Error: Cannot assign to 'user' because it is a constant

// But it DOES NOT prevent modification of the object's properties.

user.name = "Ravi";

// ** Remember: const does not make an object immutable.
