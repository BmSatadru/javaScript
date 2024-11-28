let x               // Declaration of x (initialized as undefined)
console.log(x);     // prints undefined
x = 10;            // Assigns 10 to x
console.log(x)      // prints 10
console.log(y)      // ReferenceError: Cannot access 'y' before initialization
let y = 20;        // Declaration and initialization of y
console.log(y);    // prints 20