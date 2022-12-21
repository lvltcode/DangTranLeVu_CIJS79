// Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.
// Input: "abcdef"
// Ouput: "fedcba"

function reverseString(inputString) {
    let revString = "";
    for (let index=inputString.length-1; index >= 0; index--) {
        revString += inputString[index]
    }
    return revString
}

console.log(reverseString("Hello"));
console.log(reverseString("abcdef"));