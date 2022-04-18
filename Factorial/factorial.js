
///  Мое решение ( пометка console.log не используй , лучше retern )
function factorial(n) {
    let a ;
    if (!Number.isInteger(n) ) {
        return "Pleas enter correct value "
    } else if (n>=1) {
        return n * factorial(n - 1);
    } else {
        return 1 ;
    }

}
/// Решение учителя
/*
function factorial(n) {
    if (typeof (n) !== 'number' || !Number.isInteger(n)) {
        return "Ошибка, проверьте данные";
    }
    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }
}*/
