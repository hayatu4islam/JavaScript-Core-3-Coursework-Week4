// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let sum = 0;
    let num = 0;
    for(let i = 0; i < numbers.length; i++){
        if(typeof numbers[i] === "number"){
            sum += numbers[i];
            num++;
        }
    }
    return sum/num;
}

module.exports = average;
