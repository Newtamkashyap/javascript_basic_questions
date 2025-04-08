function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(20));
console.log(factorial(0));
console.log(factorial(1));


//using arrow function
const factorialTernary = n => n <= 1 ? 1 : n * factorialTernary(n - 1);
console.log(factorialTernary(3));



function getFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialTernary(n - 1);
}
console.log(getFactorial(5));



const factorialNumber = n => n <= 1 ? 1 : n * factorialNumber(n - 1);
console.log(factorialNumber(4))


function factorial_test(num){
  if(num===1 || num===0){
    return 1;
  }

  

}

