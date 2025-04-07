function studentDetail(){
    let age = 16;
    let isStudent = true;
    
    if (age < 18) {
      if (isStudent) {
        console.log("Ticket price: ₹5");
      } else {
        console.log("Ticket price: ₹7");
      }
    } else {
      if (isStudent) {
        console.log("Ticket price: ₹8");
      } else {
        console.log("Ticket price: ₹10");
      }
    }
    
}
studentDetail();

//with args

function getTicketPrice(age, isStudent) {
    if (age < 18) {
      return isStudent ? 5 : 7;
    } else {
      return isStudent ? 8 : 10;
    }
  }

  console.log(`Ticket price: ₹${getTicketPrice(10)}`);
