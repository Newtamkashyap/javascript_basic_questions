function get_sumOf_NaturalNumbers(n){
    var sumOfAll=0;
    for(var i=1;i<=n;i++){
        console.log(`${i}`);
        sumOfAll=sumOfAll+i;
       
    }
    return sumOfAll;

    
}
console.log(get_sumOf_NaturalNumbers(5));