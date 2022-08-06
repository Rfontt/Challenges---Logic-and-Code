// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  

// The first line contains a single integer, , the number of rows and columns in the square matrix .
// Each of the next  lines describes a row, , and consists of space-separated integers .

// Constraints

// Output Format

// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input


function diagonalDifference(array) {
    let initialLeftDiagonal = 0;
    let sumInitialLeftDiagonal = 0;

    let initialRightDiagonal = array.length - 1 ;
    let sumInitialRightDiagonal = 0;

    for (let index = 0; index < array.length; index++) {
        const matriz = array[index];

        const valueLeft = matriz[initialLeftDiagonal];
        const valueRight = matriz[initialRightDiagonal];

        sumInitialLeftDiagonal += valueLeft;
        sumInitialRightDiagonal += valueRight;
        
        initialLeftDiagonal++;
        initialRightDiagonal--;
    }
    
    const difference = Math.abs(sumInitialLeftDiagonal - sumInitialRightDiagonal);

    return difference;
}

console.log(diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]));