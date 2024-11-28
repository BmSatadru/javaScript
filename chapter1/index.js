console.log("Hello World");
// const a = 10;

function test() {
    const a = 1;
    console.log(a);
}

test();
console.log(a);
// Variable Declaration and Scope Discussion

// 1. var - Function/Global Scope
var x = 10;
// - var has function scope or global scope
// - can be redeclared and updated
// - gets hoisted (declaration moves to top)
var x = 20; // valid redeclaration

// 2. let - Block Scope
let y = 30;
// - has block scope (within {} only)
// - can be updated but not redeclared in same scope
// - doesn't get hoisted
{
    let y = 40; // valid in new block scope
    console.log('Block y:', y); // 40
}
console.log('Outer y:', y); // 30

// 3. const - Block Scope
const z = 50;
// - has block scope (within {} only)
// - cannot be updated or redeclared
// - must be initialized at declaration
// - doesn't get hoisted

// Note: While const prevents reassignment, object properties can still be modified
const obj = { value: 60 };
obj.value = 70; // valid
// obj = {} // would throw error

// Demonstrating hoisting
console.log(hoistedVar); // undefined
var hoistedVar = 80;

// This would cause ReferenceError:
// console.log(notHoisted);
// let notHoisted = 90;
