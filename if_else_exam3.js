function checkPassOrFail(marks) {
    if(marks>=40){
        // console.log("Pass")
        return "Pass";
    }
    else{
        // console.log("Fail");
        return "Fail";
    }
}

console.log(checkPassOrFail(45));
console.log(checkPassOrFail(40));
console.log(checkPassOrFail(15));

