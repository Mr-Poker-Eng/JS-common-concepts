let age = 10;

// age = age + 1;

// age += 1;

// age ++;
// console.log(age++)
// console.log(++age)

// ++a <--pre increment 
// a++ <--post increment 


// decrement == same as increment, only + on -


// quiz questions
// const isTrue=true;
// console.log(!isTrue ? "hello" : "world")
// ans is "world"


// const sum =(p, q)=> {
//     p + q;
//    }
//    const result = sum(2, 3);
//    console.log(result);
//ans is undefined


// let p='Javascript'; 
// let q=p; 
// p='React'; 
// console.log(q);
// ans is Javascript



// function work(x, y = 4) {
//     return x + y;
//    }
//    console.log(work(32);
// ans is SyntaxError


// function greet(name, fn){
//     const message = "say hello, " + name;
//     fn(message)
//   }
  
//   function sayhello(val){
//     console.log(val,",", "how are you");
//   }
  
//   greet("jhon", sayhello)


function calculator(val1, val2, fn){
    return fn(val1, val2)
}

function add(val1, val2){
    return val1 + val2;
}

function multi(val1, val2){
    return val1 * val2;
}

const addRes = calculator(10, 20, add)
const multiRes = calculator(10, 20, multi)
console.log(addRes, multiRes)