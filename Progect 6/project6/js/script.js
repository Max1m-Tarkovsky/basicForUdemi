/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };


    const adv = document.querySelectorAll('.promo__adv img'), // получаем доступ к классу
        poster = document.querySelector('.promo__bg'),// получаем доступ к классу
        genre = document.querySelector('.promo__genre'),// получаем доступ к классу
        movieList = document.querySelector(".promo__interactive-list "),
        addForm = document.querySelector("form.add"),
        addInput = addForm.querySelector(".adding__input"),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();//Страничка не будет перезагружаться
        let newFilm = addInput.value;//здесь содержаться то что ввел пользователь
        const favorite = checkbox.checked;//здесь проверка галочки на тру или фолс


        if (newFilm) {//если невфилмс заполненая чтрока то делаем ( если пустая то ничего нен делаем)
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }//говорим что если строка больше 21 символа мы ее обрезаем с 0-22 не включительно символ и добавляем ...
            if (favorite) {
                console.log("Добавляем любимый фильм");
            }
            movieDB.movies.push(newFilm);//add film in bd
            sortArr(movieDB.movies);
            creatMovieList(movieDB.movies, movieList);
        }
        event.target.reset();//сбросить форму(очистить строку в которую ввели данные)

    })


// удаляем рекламу

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };


    const makeChanges = (a, b) => {
        a.textContent = 'драма';//Меняем название жанра
        b.style.backgroundImage = "url('img/bg.jpg')";// Поменял картинку на ту что прописал в url
    };

    const sortArr = (arr) => { //отсортировали список
        arr.sort();
    }


    function creatMovieList(films, parent) {
        parent.innerHTML = "";// Удали весь список (точнее сделали его пустым)
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += ` <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
        });//функционал создания новых елементов на основании старых
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener("click", () => {
                btn.parentElement.remove();//удаляем со странички родительский елемент
                movieDB.movies.splice(i, 1);//вырезаем с бд  нное кол елемент (1) начиная с индекса i
                creatMovieList(films, parent);

            })
        })
    }

    deleteAdv(adv);
    makeChanges(genre, poster);
    creatMovieList(movieDB.movies, movieList);


})