let a=33;
let b="44";

console.log(a);
console.log(typeof a);
console.log(b);
console.log(typeof b);

console.log(a + b); // Concatenation due to type coercion
console.log(typeof (a + b)); // Resulting type is string

console.log(a - b); // Subtraction, b is coerced to a number
console.log(typeof (a - b)); // Resulting type is number

let valueInNumber = Number(b);
console.log(valueInNumber); // Converts string to number

console.log(2**3); // Exponentiation operator