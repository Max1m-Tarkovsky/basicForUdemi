function sayHello(someName) {
    return `Привет, ${someName}!`;

}


function returnNeighboringNumbers(someNumber) {
    let someArr = [];
    if (typeof someNumber === "number") {
        someArr[0] = someNumber - 1;
        someArr[1] = someNumber;
        someArr[2] = someNumber + 1;

        return someArr;
    }
}

function getMathResult(value, number) {

    if (typeof number !== "number" || number <= 0) {
        return value;
    }
   let result = '';

        for (let i = 1; i <= number; i++) {
            if(i===number){
                result += `${value * i}` ;
            }else{
                result += `${value * i}---` ;
            }

        }
        return result;
    }

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}



console.log(getMathResult(10, "d"))
