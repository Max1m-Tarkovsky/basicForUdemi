const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(films => films.rating >= 8);

}

console.log(showGoodFilms(films));

function showListOfFilms(arr) {

      return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
}

console.log(showListOfFilms(films));

function setFilmsIds(arr) {

    return arr.map((film, i) => {
        film.id = i;
        return film;
    });

}

console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);


function checkFilms(arr) {
    if (arr.find(films => films.id === 0)) {
        return true
    } else return false;


}

console.log(checkFilms(tranformedArray));