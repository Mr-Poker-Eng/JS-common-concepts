// function sum(a, b, c){ // <--- parameter
//     // console.log(arguments)
//     // for(let i=0; i<arguments.length; i++){
//     //     let number = arguments[i];
//     //     console.log(number)
//     // }


//     const newArg = [...arguments];
//     console.log(newArg);
// }

// sum(10, 20, 30, 40, 50, 60) // <--- arguments



// let name = "munim";

// function test(text){
//     console.log(text)
// }

// test(name);


//pass by value
// let a = 10;
// let b = 20;

// function sum(num1, num2){
//     // console.log(num1, num2);
//     num1 = 50;
// }

// sum(a, b);

// console.log(a)



// pass by reference
const person = {name: "munim", age: 10}

function sum(obj){
    // console.log(obj)
    obj.name = "al munim";
    obj.age = 23;
}


sum(person)
console.log(person)