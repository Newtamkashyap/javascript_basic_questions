function reverse_Number(numbs) {
    let newNumbers = '';
    for (i = numbs.length - 1; i >= 0; i--) {
        // newNumbers += numbs[i]
        newNumbers+=numbs[numbs.length-1-i]
    }
    return newNumbers;

}
console.log(reverse_Number("123456"));