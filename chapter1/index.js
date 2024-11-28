console.log("Hello World");
// const a = 10;

function test() {
    const a = 1;
    console.log(a);
}

test();

// Variable Declaration and Scope Discussion

// ==================1. var - Function/Global Scope=================
var x = 10;
// - var has function scope or global scope
// - can be redeclared and updated
// - gets hoisted (declaration moves to top)
var x = 20; // valid redeclaration

// ==================2. let - Block Scope=================
let y = 30;
// ----------------has block scope (within {} only)--------------
/*
let x = 10;
{
    let x = 20;     // Different variable, new block scope
    console.log(x); // 20
}
console.log(x);     // 10
1. Variables declared with `let` are only accessible within 
their block (`{}`)
2. Each block creates a new scope
3. Perfect for if, for, while blocks
*/
// ----------------can be updated but not redeclared in same scope----------
/*
// Updating (allowed)
let count = 1;
count = 2;         // ✅ OK: updating value

// ----------------Redeclaring (not allowed)-----------------
let user = "John";
let user = "Jane"; // ❌ Error: cannot redeclare block-scoped variable

// ----------------But OK in different scope-----------------
let x = 10;
{
    let x = 20;    // ✅ OK: different scope
}
*/
// ----------------doesn't get hoisted-----------------
/*
console.log(x);    // ❌ ReferenceError: Cannot access 'x' before initialization
let x = 10;
1. Enters "Temporal Dead Zone" (TDZ) until declaration is reached
2. Cannot access variable before declaration

let m;
console.log(m);    // will give "undefined"
m = 10;
*/
{
    let y = 40; // valid in new block scope
    console.log('Block y:', y); // 40
}
console.log('Outer y:', y); // 30

// ==================3. const - Block Scope=================
const z = 50;

// ----------------Block Scope-----------------
/*
const x = 10;
{
    const x = 20;    // Different variable, new block scope
    console.log(x);  // 20
}
console.log(x);      // 10
*/

// ----------------Like `let`, `const` is only accessible within its block (`{}`)-----------------
// - Each block creates a new scope

// ----------------Cannot be Updated or Redeclared-----------------
/*
const PI = 3.14;
PI = 3.15;         // ❌ Error: Assignment to constant variable

const user = "John";
const user = "Jane"; // ❌ Error: Identifier 'user' has already been declared

// However, object properties CAN be modified:
const person = { name: "John" };
person.name = "Jane";  // ✅ OK: Modifying property
person = {};          // ❌ Error: Cannot reassign const
*/

// ----------------Must be Initialized at Declaration-----------------
/*
const x;           // ❌ Error: Missing initializer in const declaration
const y = 10;      // ✅ OK: Declared with initialization
*/


// ----------------Hoisting-----------------
/*      
console.log(x);     // ❌ ReferenceError: Cannot access 'x' before initialization
const x = 10;
*/  

// - `const` IS hoisted (like `let`), but differently from `var`
// - Enters Temporal Dead Zone (TDZ) until declaration
// - Cannot access variable before declaration

// ----------------Best Practices-----------------
// 1. Use `const` by default
// 2. Only use `let` when you need to reassign values
// 3. Remember that `const` objects can still have their properties modified
// 4. Always initialize `const` variables when declaring them

// - While const prevents reassignment, object properties can still be modified
const obj = { value: 60 };
obj.value = 70; // valid
// obj = {} // would throw error

// ================Demonstrating hoisting=================
console.log(hoistedVar); // undefined
var hoistedVar = 80;

// This would cause ReferenceError:
// console.log(notHoisted);
// let notHoisted = 90;

// -----------------------1. `let` Behavior-----------------------
/*
let x;              // ✅ Valid: Declaration without initialization
console.log(x);     // undefined
x = 10;             // ✅ Valid: Can assign later
*/

// -----------------------2. `const` Behavior-----------------------
/*
const y;            // ❌ Error: Missing initializer in const declaration
console.log(y);     // Never reaches here
y = 10;             // Never reaches here
*/

// -----------------------3. Hoisting Similarity-----------------------
/*
// The hoisting similarity between `let` and `const` is about their **Temporal Dead Zone** behavior:

console.log(x);     // ❌ ReferenceError: Cannot access 'x' before initialization
let x = 10;

console.log(y);     // ❌ ReferenceError: Cannot access 'y' before initialization
const y = 10;
*/

// -----------------------The key differences are:-----------------------
// 1. **Declaration Requirements**:
//    - `let`: Can be declared without initialization
//    - `const`: Must be initialized at declaration

// 2. **Assignment Rules**:
//    - `let`: Can be reassigned
//    - `const`: Cannot be reassigned

// 3. **Hoisting Behavior**:
//    - Both are hoisted
//    - Both have TDZ before declaration
//    - Both throw ReferenceError if accessed before declaration
//    - The difference is that `const` requires immediate initialization

// So, while both `let` and `const` are hoisted similarly regarding TDZ, they have different rules about declaration and initialization

