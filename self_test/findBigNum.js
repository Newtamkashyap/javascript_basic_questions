function findBiggestNumber(n1, n2, n3) {
    if (n1 > n2) {
        console.log(` ${n1} : n1 is bigger`)
    }
    else if (n2 > n3) {
        console.log(`${n2} : n2 is bigger`)
    }
    else {
        console.log(`${n3} : n3 is bigger`);
    }

}

findBiggestNumber(170, 200, 300)