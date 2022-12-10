function convertToNewRoman(n) {
    let numberMap = {I:1, IV:4, V:5, IX:9, X:10, XL:40, L:50, XC:90, C:100, CD:400, D:500, CM:900, M:1000};
    let result = "";
    for(let index in numberMap){
        while(n >= numberMap[index]){
            result += index;
            n -= numberMap[index];
        }
    }
    return result;
}

module.exports = convertToNewRoman;
