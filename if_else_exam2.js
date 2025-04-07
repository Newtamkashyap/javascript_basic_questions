function check_eligiblity(){
    let age = 29;

    if (age >= 18) {
      console.log("You are eligible to vote.");
    } else {
      console.log("You are not eligible to vote.");
    }
}
check_eligiblity()

//with args

function check_criteria(personAge){
 

    if (personAge >= 18) {
      console.log("You are eligible to vote.");
    } else {
      console.log("You are not eligible to vote.");
    }
}
check_criteria(10);
