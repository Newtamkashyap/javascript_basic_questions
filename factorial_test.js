// 5!=5*4*3*2*1
// 8!=8*7*6*5*4*3*2*1
// 0!=0*(0-1)
// 1!=1*(1-1)=0
// The product of the number is equivalent to the number

// factorial is the product of number n*(n-1)

// 5!=n*(n-1)*n-2..*1
// 5*(5-1)*(5-2)*(5-3)*(5-4)
// 5*4*3*2*1
// 120

// 5!=1*2*..*n
// 5!=(n-(n-1))*(n-(n-2))*(n-(n-3))*(n-(n-4))*(n-(n-5))
// (5-(5-1))*(5-(5-2))*(5-(5-3))*(5-(5-4))*(5-(5-5))
// (5-(4))*(5-(3))*(5-(2))*(5-(1))*(5-(0))
// 1*2*3*4*5
// 120

// A factorial is a function that multiplies a number by every number below it till 1.

function printNumber(num) {
    let sum = 0;
    let product=1;
    for (i = num; i > 0; i--) {
        console.log(i)
        // sum++;
        // sum=sum+1;
        sum=sum+i;
        console.log(sum);

        product=product*i;
        console.log(product);
    }
    console.log(`sum = ${sum}`);
    console.log(`product =${product}`);
}
// printNumber(10);



function recursionWay(num){
    // if(num===0 || num===1)
    //     return 1;

    return num *recursionWay(num-1);
    // recursionWay(5)
       // 5*recursionWay(5-1);
          // 4
           

    // 5*(5-1)5*(5)

}
console.log(recursionWay(5));
// console.log(recursionWay(0));
// console.log(recursionWay(1));

