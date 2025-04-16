function reverse_ArrayOfElement(arr) {
    let newarray = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        newarray += arr[arr.length - 1 - i];
        sum += arr[i];


    }


    console.log(newarray)
    console.log(sum)

}

reverse_ArrayOfElement([1, 2, 3, 4, 5])