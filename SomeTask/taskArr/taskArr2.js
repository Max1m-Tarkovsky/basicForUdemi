const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str !== "string") {
        return `Ошибка!`;
    }
    return str.split('').reverse().join('');
}

//console.log(reverse(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
let arr1 = baseCurrencies.concat(additionalCurrencies);

function availableCurr(arr, missingCurr) {

    let str = '';
    arr.length === 0 ? str = "Нет доступных валют!" : str = 'Доступные валюты:\n';

    arr.forEach(curr => {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });
    return str;
}

console.log(availableCurr(arr1, "CNY"));


