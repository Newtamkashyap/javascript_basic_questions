

function ifElseExample(grade){
    if(grade==="A" ||grade==="a"){
        console.log("Excellent")
    }
    else if(grade==="B" || grade==="b"){
        console.log("good")
    }
    else if(grade==="C" || grade==="c"){
        console.log("Avergae")
    }
    else{
        return "poor result"
    }
}
ifElseExample("A");
ifElseExample("b");
