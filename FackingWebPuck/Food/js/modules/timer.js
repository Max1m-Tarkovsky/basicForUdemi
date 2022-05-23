function timer() {
    // Timer
    const deadline = '2022-05-11';

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());//ищем сколько времени осталось между дедлайном и сегодняшней датой ( в милисекундах)
        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor((t / (1000 * 60 * 60 * 24))),
                hours = Math.floor((t / (1000 * 60 * 60) % 24)),
                minutes = Math.floor((t / 1000 / 60) % 60),
                seconds = Math.floor((t / 1000) % 60);

        }


        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {// эта функция делает на сайте не 1 день, а 01 день
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {//эта функция выводит данные на сайт

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);//обновляет счетчик каждную секунду в интервале  (1000 млсекунд)

        updateClock();// позволяет счетчику показывать время на сайте как только мы на него зашли сразу верное ,без нее первую секунду будеть показывать дедлайн а через секунду уже нужное значение

        function updateClock() {//обновляет счетчик и делает числа 01 а не 1 с помощью ф-ции гетЗеро
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);
}

module.exports = timer;
