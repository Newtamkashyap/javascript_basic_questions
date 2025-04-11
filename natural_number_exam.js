function sumNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      console.log(i)
      sum += i;
    }
    return sum;
  }
  
  // const n = 10; 
  console.log(`sum of the natural number  is : ${sumNaturalNumbers(5)}`);
  