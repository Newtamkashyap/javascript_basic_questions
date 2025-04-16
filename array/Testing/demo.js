function printEachCharactor_OfString(str) {
    let newString = '';

    // for(let i=0; i<str.length-1;i--){
    // it will give an error because while we are assiging inital value zero it will  decrese to -1 on first iteration
    //  but the lowest index number of any array is zero .

    for (let i = 0; i <= str.length - 1; i++) {

        newString+=str[i]
        // console.log(newString);

        console.log(str[i])
        // console.log(i);


    }
}
 printEachCharactor_OfString("Ashish is a boy");

// length and index(position)
function reverseString(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
         newStr += str[i];
        // newStr+=str[str.length-i-1]
    }
    
    console.log(newStr);

}
reverseString("Ashish");
