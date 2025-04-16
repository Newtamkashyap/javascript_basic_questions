function reverse_string(str) {
    let newString = "";
    //1 way
    // for(i=0;i<str.length;i++){
    //     newString+=str[str.length-1-i];
    // }

    //2 way
    for (i = str.length - 1; i >= 0; i--)
        newString += str[i]
    console.log(newString);

}
reverse_string("Ashish");