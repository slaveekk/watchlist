import {watchlistPopulatedMain, values} from "./watchlist.js"

function getWatchlistHtml() {
    watchlistPopulatedMain.innerHTML = values.map(savedMovie => {
        savedMovie = JSON.parse(savedMovie);
        const btnId = values.indexOf(savedMovie) + 1
        console.log(btnId)
        return `
            <div class="movie-container">
                <img class="poster" src="${savedMovie.Poster}">
                <div class="movie-info">
                <div class="title-container">
                    <h3 class="movie-title">${savedMovie.Title}</h3>
                    <img class="fav-icon" src="icons/fav-icon.png">
                    <p class="rating">${savedMovie.imdbRating}</p>
                </div>
                <div class="info">
                    <p>${savedMovie.Runtime}</p>
                    <p>${savedMovie.Genre}</p>
                    <button class="delete-button" id="${btnId}">
                        <img src="icons/delete-icon.png">
                        <p>Remove</p>
                    </button>
                </div>
                <p class="plot-desc">${savedMovie.Plot}</p>
                </div>
            </div>
            `;
    }).join('');
}

export default getWatchlistHtml
