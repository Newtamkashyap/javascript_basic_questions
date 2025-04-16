// Write a program to reverse a string

function reverseString(str) {


    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
         newString += str[i];
        // newString+=str[str.length-1-i]
    }
    return newString;
}
  console.log(reverseString("Newtam"))





//Ashish
function printString(str) {
    let newStr = "";
    for(let i =0;i<str.length;i++){
        newStr=newStr+str[i];
        // newStr=newStr+str[str.length-1-i]
        console.log(newStr);

    }
console.log(newStr);

}
// printString("Ashish")