function sum() {
  let counter = 0;
  return () => {
    counter++;
    console.log(counter);
  };
}


const increment = sum();
// console.log(increment)
// increment()
// increment()
// increment()
// increment()
// increment()


// const increment2 = sum()
// increment2()
// increment2()
// increment2()


// increment()


function outer() {
  let outerVar = "I'm in the outer scope!";
  function inner() {
      console.log(outerVar);
  }
  return inner;
}
const closure = outer(); 
closure(); 
