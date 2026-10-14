// primitive types: number, string, boolean, void, null, undefined, symbol,bigint

//========================================================================
// number : numeric values - Use number for interger, floting-point number.
//========================================================================
let age: number = 18;
let temp: number = 35.5;
let price: number = 99.9;
let balance: number = -10;

console.log(age);
console.log(price);
console.log(balance);

//===================
// string - text
//===================

let myName: string = "KP";
let country: string = 'India';
let city: string = "Mumbai";

console.log(`Hello, I am ${myName}, from ${country}, staying in ${city}.`);

//=========================================================================
// boolean - true or false - use boolean for conditions and decision makings
//=========================================================================

let islogged: boolean = true;
let canIVote: boolean = age >= 18;

console.log(islogged);
console.log(canIVote);

if(islogged){
    console.log(islogged);
    islogged = false;
}

console.log(islogged);

//============
//undefined
//============

// undefined commonly appears when a variable has not received a value or value not found,
// or missing object property, or a function does not retun a value, or a value not found in an array


let cityName: string;
//console.log(cityName); // Error: variable is used before being assigned

let address;
console.log(address); // undefined

// A variable declared without an initializer
let cityname: string | undefined;
console.log(cityname); // undefined

cityname = "New Delhi"; // valid
console.log(cityname); // New Delhi

cityname = undefined; // valid
console.log(cityname); // undefined

// Example: Item selection

let selectedItem: string | undefined;

function selectItem(item: string){
    selectedItem = item;
}

console.log(selectedItem); // undefined
selectItem("Laptop");
console.log(selectedItem); // Laptop

// ======== Undefined - object property missing========

type User = {
    name: string,
    email?: string // ? - indicates it optional
};

const user1: User = {
    name: "KP"
};

const user2: User = {
    name: "Alex",
    email: "abc@example.com"
};

console.log(user1.name); // KP
console.log(user1.email); // undefined

console.log(user2.name);  // Alex
console.log(user2.email); // abc@example.com


// ======= Undefined - functiona does not return a value=========

function greet(): void{
    console.log("Hi");
}

const result = greet(); // Hi
console.log(result);  // undefined

// function print 'Hi', but does not return anything explicitly.
// Check the return statement in the following example

function getUserName():  string {
    return "Alex";
}

console.log(getUserName()); // Alex

// =======undefined - An array item does not exist=======
const colors: string[] = ["Red","Blue"];

console.log(colors[0]); // Red
console.log(colors[1]); // Blue
console.log(colors[2]); // undefined

// The array has only two elements, at indexes 0 and 1. Index 2 does not exist, so TypeScript returns undefined.

//=============
//    null
//=============

// we deliberately represent the absence of a value
// undefined - A value has not been initialized, has not been provided and not found

//let profilePicture: string | null = "Alex";

// There is no user profile picture
let profilePicture: string | null = null;
console.log(profilePicture); // null

// Add a profile picture
profilePicture = "profile.jpg"
console.log(profilePicture); // profile.jpg

//user remove the profile picture
profilePicture = null;
console.log(profilePicture); // null

// This is useful especially when a user can add, change, or remove something.

// ========== null vs undefined ===========
// Example: updating a profile

type ProfileUpdate = {
    name?: string,
    profilePic?: string | null
};

//property omitted/undefined
const update1: ProfileUpdate = {};

// Explicitly clearing the field(picture)
const update2: ProfileUpdate = {
    profilePic : null
};

// set the picture
const update3: ProfileUpdate = {
    profilePic: "picture.jpg"
};

// null - There is intentionally no value
// undefined - There is no value provided(missing or unassigned)

//==========================
// Symbol data type
//==========================

const userid: symbol = Symbol("id");

console.log(userid); // Symbol(id)
console.log(typeof userid); // symbol

// Symbol() is the built-in function that creates a unique symbol. 
// It means, It generates a unique symbol with description "id" that can serve as a property key.

const user101 = {
    name: "Alex",
    [userid]: 101
};

// [userid] means: Use the value of 'userid' as the property key.
// [userid] : 101, Means store the value 101 under property key "userid"

const user102 = {
    name: "KP",
    [userid]: 102
};

console.log(user101[userid]); // 101
console.log(user102[userid]); // 102

// compare the Symbol keys.
const userid1: symbol = Symbol("id");
const userid2: symbol = Symbol("id");

// Even though both Symbols have the description "id", they are unique.

console.log(userid1 === userid2); // false
