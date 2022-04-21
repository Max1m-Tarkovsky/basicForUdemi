function getTimeFromMinutes(second) {
    if (second < 0 || !Number.isInteger(second) || typeof (second) !== "number") {
        return "Ошибка, проверьте данные";
    }
    if (second === 0 || second < 60 || second >= 300 && second < 720) {
        return `Это ${Math.floor(second / 60)} часов и ${second % 60} минут`;
    }
    if (second >= 60 && second < 120) {
        return `Это ${Math.floor(second / 60)} час и ${second % 60} минут`;
    }
    if (second >= 120 && second < 299) {
        return `Это ${Math.floor(second / 60)} часа и ${second % 60} минут`;
    }

}

console.log(getTimeFromMinutes(150));

function findMaxNumber(value1, value2, value3, value4) {

    if ((typeof (value1) !== "number" ) || (typeof (value2) !== "number" ) || (typeof (value3) !== "number" ) || (typeof (value4) !== "number" )) {
        return 0;
    }
    if (value1 > value2 && value1 > value3 && value1 > value4) {
        return value1;
    }if(value2 > value1 && value2 > value3 && value2 > value4){
        return value2;
    }if(value3 > value1 && value3 > value2 && value3 > value4){
        return value3;
    }if(value4 > value1 && value4 > value3 && value4 > value2){
        return value4;
    }

}

console.log(findMaxNumber(0,"3",6,7));
//решение препода
/*
function findMaxNumber(a, b ,c, d) {
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}

findMaxNumber(1, 5, 6.6, 10.5);
findMaxNumber(1, 5, '6', '10');*/
