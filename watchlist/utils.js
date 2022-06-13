import {populatedMain, initialMain} from "/index.js"

async function getFullMovieData(input, arr) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=fc187d9f&s=${input.value}`)
    const data = await res.json()
    console.log(data)

    if (data.Response === 'False') {
        populatedMain.innerHTML = `
        <h3 id="error-message">Unable to find what you’re looking for. 
        Please try another search.</h3>
        `
    } else {
        const imdbIdArr = data.Search.map(movie => {
            return movie.imdbID
    })
    
        for (const id of imdbIdArr) {
            const res =  await fetch(`http://www.omdbapi.com/?apikey=fc187d9f&i=${id}`)
            const data = await res.json()
            arr.push(data)
        }
    }

}

function getMoviesHtml(arr) {
    initialMain.style.display = 'none'
    populatedMain.style.display = 'block' 
    populatedMain.innerHTML = arr.map((movie) => {
        return `
            <div class="movie-container">
                <img class="poster" src="${movie.Poster}">
                <div class="movie-info">
                <div class="title-container">
                    <h3 class="movie-title">${movie.Title}</h3>
                    <img class="fav-icon" src="icons/fav-icon.png">
                    <p class="rating">${movie.imdbRating}</p>
                </div>
                <div class="info">
                    <p>${movie.Runtime}</p>
                    <p>${movie.Genre}</p>
                    <button class="save-button" id="${arr.indexOf(movie)}">
                        <img src="icons/save-icon.png">
                        <p>Watchlist</p>
                    </button>
                </div>
                <p class="plot-desc">${movie.Plot}</p>
                </div>
            </div>
        `
    }).join('') 
}


export {getMoviesHtml, getFullMovieData}