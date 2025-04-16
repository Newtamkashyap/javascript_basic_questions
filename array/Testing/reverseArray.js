function reverse_Array(){
    let arr=["Mango","banana","Grapes","Guava","Lichi"]
    let newArray=[];
    for(let i=0;i<arr.length-1;i++){
        newArray+=arr[arr.length-1-i];
    }
    return newArray;
}
console.log(reverse_Array());