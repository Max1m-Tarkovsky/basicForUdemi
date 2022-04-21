function calculateVolumeAndArea(value) {
    if (typeof value !== "number" || !Number.isInteger(value) || value <= 0) {
        return "При вычислении произошла ошибка";
    } else {
        return `Объем куба: ${value * value * value}, площадь всей поверхности: ${6 * (value * value)}`;
    }

}

console.log(calculateVolumeAndArea(10));

function getCoupeNumber(value) {
    if (typeof value !== "number" || !Number.isInteger(value) || value < 0) {
        return "Ошибка. Проверьте правильность введенного номера места"
    }
    if (value === 0 || value > 36) {
        return "Таких мест в вагоне не существует";
    }
    for (let i = 4; i <= 36; i = i + 4) {
        if (value <= i) {
            return Math.ceil(i / 4);
        }
    }
}

console.log(getCoupeNumber(3));