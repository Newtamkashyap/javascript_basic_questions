
function getTicketPrice(age, stud) {
    if (age < 18)
        return stud ? 5 : 7;
    else {
        return stud ? 8 : 10;
    }

}
console.log(getTicketPrice(17));