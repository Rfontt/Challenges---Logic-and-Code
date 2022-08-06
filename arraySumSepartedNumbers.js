// Function Description

// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

// aVeryBigSum has the following parameter(s):

// int ar[n]: an array of integers .
// Return

// long: the sum of all array elements
// Input Format

// The first line of the input consists of an integer .
// The next line contains  space-separated integers contained in the array.

// Output Format

// Return the integer sum of the elements in the array.

// 5
// 1000000001 1000000002 1000000003 1000000004 1000000005
// Output

// 5000000015

function arraySumSepartedNumbers(array) {
    let sumFinal = 0;

    for (let index = 0; index < array.length; index++) {
        sumFinal += array[index]
    }

    return sumFinal;
}

console.log(arraySumSepartedNumbers([ 1000000001, 1000000002, 1000000003, 1000000004, 1000000005 ]) === 5000000015);
console.log(arraySumSepartedNumbers([ 1000000001, 1000000002, 1000000003, 1000000004, 1000000005 ]));