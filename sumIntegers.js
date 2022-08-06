let array = [10, 20, 30, 40];
let numberCurrect = 0;

for (let index = 0; index < array.length; index++) {
    let element = array[index];

    element += numberCurrect;

    numberCurrect = element;
}

console.log(numberCurrect)