function main(...args) {
    let arrayPrevious = new Array();

    for (let index = 0; index < args.length; index++) {
        const element = args[index];

        if (arrayPrevious.length === 0) {
            arrayPrevious.push(previous(element));
        }

        const diff = diffSymethic(arrayPrevious[arrayPrevious.length - 1], previous(element));

        arrayPrevious.pop();
        arrayPrevious.push(diff);
    }

    return arrayPrevious[arrayPrevious.length - 1];
}

function previous(numbersString) {
    return numbersString.map((item) => {
        return Number(item);
    });
}

function diffSymethic(array01, array02) {
    if ((JSON.stringify(array01) === JSON.stringify(array02))) {
        return array01;
    }

    const uniqueValuesArray01 = array01.filter((item) => array02.indexOf(item) === -1);
    const uniqueValuesArray02 = array02.filter((item) => array01.indexOf(item) === -1);

    const unique = uniqueValuesArray01.concat(uniqueValuesArray02);

    return unique;
}

console.log(main([1, 2, 3], [3, 5, 6], [6, 8, 9])); // [1, 2, 5, 8, 9]