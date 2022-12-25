// Viết một function xoá các phần từ trùng lặp trong một mảng các số:
// Input: [1, 2, 3, 5, 4, 2, 6, 4]
// Output: [1, 2, 3, 5, 4, 6]

function removeDuplicateElements(inputArray) {
    let uniqueArray = inputArray.filter((element, index) => {
        return inputArray.indexOf(element) === index;
    });
    return uniqueArray
}

let inArr = [1, 2, 3, 5, 4, 2, 6, 4];
console.log(removeDuplicateElements(inArr));
let inArr2 = arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
console.log(removeDuplicateElements(inArr2));