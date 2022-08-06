// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

function plusMinus(array) {
    let positivesQuantity = 0;
    let negativesQuantity = 0;
    let zerosQuantity = 0;
    
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        if (element > 0) {
            positivesQuantity++;
        } else if (element < 0) {
            negativesQuantity++;
        } else if (element === 0) {
            zerosQuantity++;
        }
    }

    const positivesRatio = (positivesQuantity/array.length).toFixed(6);
    const negativesRatio = (negativesQuantity/array.length).toFixed(6);
    const zerosRatio = (zerosQuantity/array.length).toFixed(6);

    console.log(positivesRatio);
    console.log(negativesRatio);
    console.log(zerosRatio);
}

plusMinus([-4, 3, -9, 0, 4, 1]);