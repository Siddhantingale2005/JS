// Datatypes

// Primitive And Non Primitive
//Primitive:-String, Number, Boolean, Undefined, Null, Symbol , BigInt
// Non Primitive:- Object, Array, Function

const id=Symbol('id');
const anotherId=Symbol('id');
console.log(id === anotherId); // This will log false because each Symbol is unique