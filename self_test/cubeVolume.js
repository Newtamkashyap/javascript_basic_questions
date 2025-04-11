// function getCubeVolume(len){
// let volume=len*len*len;
// return volume;
// }
// console.log(getCubeVolume(5));

function calculateCubeVolume(len){
    var volume=len*len*len;

    if(volume%2===0){
        return volume;

    }
    else{
        return "enter only even numbers"
    }
}
console.log(calculateCubeVolume(2));
console.log(calculateCubeVolume(51));
