import {getMoviesHtml, getFullMovieData} from "/utils.js"
import {toggleBtn, darkMode} from "./watchlist.js"

const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-button')
const populatedMain = document.getElementById('populated-main')
const initialMain = document.getElementById('initial-main')
const saveBtns = document.getElementsByClassName('save-button')
const savedMoviesArr = []
let moviesArr = []
let num = -1

searchBtn.addEventListener('click', () => { 
    getFullMovieData(searchInput, moviesArr)

    if (populatedMain.innerHTML === '') {
        getMoviesHtml(moviesArr)
    } else {
        moviesArr = []
    }

    saveToWatchlist(moviesArr)
})

searchInput.addEventListener('input', () => {
    populatedMain.innerHTML = ''
    moviesArr = []
    populatedMain.style.display = 'none'
    initialMain.style.display = 'block'
})

function saveToWatchlist(arr) {
    for (let i = 0; i < saveBtns.length; i++) {
    saveBtns[i].addEventListener('click', () => {
        saveBtns[i].innerHTML = `
        <p>Saved<p>
        `
        saveBtns[i].disabled = true

        const movieForSave = arr[saveBtns[i].id]

        num++
        localStorage.setItem(num, JSON.stringify(movieForSave))
        savedMoviesArr.push(localStorage.getItem(num))
    })
}}

toggleBtn.addEventListener('click', () => {
    darkMode()
})

export {initialMain, populatedMain}
