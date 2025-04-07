function sumNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  const n = 10; 
  console.log(`sum of the natural number ${n} is : ${sumNaturalNumbers(n)}`);
  