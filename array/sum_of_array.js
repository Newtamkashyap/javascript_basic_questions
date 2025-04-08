function sumOfArray() {
    const arr = [1, 2, 3, 4, 5]
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        sum += arr[i];
        console.log(sum)

    }

    console.log(`sum of array = ${sum}`)
}
sumOfArray();