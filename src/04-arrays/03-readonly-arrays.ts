// What is readonly array?
// A readonly array is an array whose elements cannot be modified after initialization through that reference.
// It is useful when you want to prevent accidental changes to data.

// ======= Creating readonly arrays =====

let numbers: readonly number[] = [10, 20, 30];

console.log(numbers);
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

// modification NOT allowed

// numbers[0] = 11;  // Error: Index signature in type 'readonly number[]' only permits reading
// numbers.push(50); // Error: Property 'push' does not exist on type 'readonly number[]'
// numbers.pop(); // Error

//======= Using ReadonlyArray syntax =======

// Another way to declare a readonly array is:

let values: ReadonlyArray<number> = [120, 230, 110];

// Both declarations are equivalent:
let a: readonly number[] = [10, 20];

let b: ReadonlyArray<number> = [10, 20];

// ====== Readonly arrays in functions ======

function printNumbers(numbers: readonly number[]): void{
        numbers.forEach((num)=> {
            console.log(num)
        });
}

let evens: number[] = [2, 4, 6, 8, 10];
printNumbers(evens);

// The function can read the array but cannot modify it.

/* Error

function printNumbers(numbers: readonly number[]): void {
    numbers.push(40); // Error
}

*/

// ========= Readonly tuples ==========

// You can also create readonly tuples.

let user: readonly [number, string] = [ 1, "John"];

console.log(user[0]); // 1

// Error
// user[0] = 2; // Error: Cannot assign to '0' because it is a read-only property

//*** Can we use map() on a readonly array?

// Yes. map() reads the original array and creates a new array.

let numberlist: readonly number[] = [1, 2, 3];

let doubled = numberlist.map(n => n * 2);

console.log(doubled); // [ 2, 4, 6 ]

// ****Can we use filter() on readonly arrays?

// Yes. It returns a new array.

let numberlist2: readonly number[] = [1, 2, 3, 4];

let result = numberlist2.filter(n => n > 2);

console.log(result); // [3, 4]