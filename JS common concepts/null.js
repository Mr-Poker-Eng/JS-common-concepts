// null is a JavaScript BUG, that can be solved but it create a huge problem.

// let name = null;
// console.log(typeof name)

//console.log = names; // undefined

// let name;
// console.log(name) //undefined

// if we call function without given any parameter, then it will show undefined in the console.
// function sum(num1, num2){
//     console.log(num1, num2);
// }

// sum()

// if we didn't return from a function, then it will also show undefined in the console
// function sum(num1, num2){
//     console.log(num1, num2);
// }

// const result = sum(10, 20);
// console.log(result)

function sum(num1, num2) {
  return num1 + num2;
}

const result = sum(10, 20);
console.log(result);
