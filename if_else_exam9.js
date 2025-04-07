function timing() {
    const time = new Date().getHours();

    if (time < 10) {
       console.log("good morning") 
    }
    else if (time < 20) {
       console.log("good evening") 
        
    }
    else {
       console.log("good night") 

     
    }
}
timing();

