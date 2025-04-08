function doubleNumbers(arr) {
    return arr.map(num => num * 2);
  }
  
  console.log(doubleNumbers([1, 2, 3]));
  

  //using tradition way

  function doubleNum(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * 2);
    }
    return result;
  }
  
  console.log(doubleNum([1, 2, 3]));
  