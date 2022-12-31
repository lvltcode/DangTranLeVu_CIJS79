// Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng:
// Input: [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]
// Output: {value: 3, count: 3}

function countingElement(inputArray) {
    let counterObj = {};
    for (element of inputArray) {
        if (counterObj[element]) {
            // console.log(counterObj[element]);
            counterObj[element] += 1;
        } else {
            counterObj[element] = 1;
        }
    };
    return counterObj
}

function findingMaxObj(inputCounterObj){ 
    let valuesOfObj = Object.values(inputCounterObj);
    let maxObj = inputCounterObj.filter(element, index => {
        if (Object.values(element) === Math.max(...valuesOfObj)) {
            
        }
    });
}


const myArray = [false, 24, "English", false, "english", 22, 19, false, "English", 19];
// let countObj = countingElement(myArray);
// console.log(countObj);
let valuesOfObj = Object.values(countObj);
console.log(Math.max(...valuesOfObj));






