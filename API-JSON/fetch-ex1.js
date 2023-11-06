// sends a request to https://yesno.wtf/api/
/*
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(filmData => {
        console.log(filmData);
        const movieAmount = filmData.length;
        const movieAmountElement = document.createElement("p")
        const mainDiv = document.querySelector(".container")

        movieAmountElement.innerText = movieAmount + " movies fetched";
        mainDiv.appendChild(movieAmountElement)

    });
 */

const movieButton = document.querySelector("#movie-btn")
const resetButton = document.querySelector("#reset-btn")
const inputField = document.querySelector("#title-search")


function filterByTitle (data,input){
    const filter = input.value.toUpperCase()
    return data.filter(obj=>obj.title.toUpperCase().indexOf(filter) > -1 )

}

function addMoviesToHTML (data) {
    const mainList = document.querySelector(".movie-list")
    mainList.innerHTML = "";

    data.forEach((obj)=>{
        const listElement = document.createElement("li")
        const movieTitle = document.createElement("h2")
        movieTitle.innerText = obj.title
        listElement.appendChild(movieTitle)

        for (let i = 1; i < 5; i++) {
            const movieElement = document.createElement("p")
            let keyName = Object.keys(obj)[i];

            movieElement.innerText = keyName + " : "+  obj[keyName];
            listElement.appendChild(movieElement)
        }
        mainList.appendChild(listElement)
    })
}

function filterMovieDataByYear (data){
    return data.filter((obj)=> obj.year > 2014)

}



// sends a request to https://yesno.wtf/api/
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(filmData => {
        console.log(filmData[0]);

        addMoviesToHTML(filmData)

        inputField.onkeyup = ()=> {const newData = filterByTitle(filmData,inputField);addMoviesToHTML(newData)}
        movieButton.onclick = ()=>{inputField.value="";const newData = filterMovieDataByYear(filmData);addMoviesToHTML(newData)}
        resetButton.onclick = ()=>{inputField.value="";addMoviesToHTML(filmData)}

    });