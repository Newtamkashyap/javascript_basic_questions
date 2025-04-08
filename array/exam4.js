function evenNumber(num){
    if(num%2===0){
        console.log("true");
    }
    // else{
    //     console.log("false");
    // }
}

console.log(evenNumber(7));


//using filter method
function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  console.log(getEvenNumbers([1, 2, 3, 4]));
  