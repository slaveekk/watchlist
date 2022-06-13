import getWatchlistHtml from "./watchlist-utils.js"

const watchlistInitialMain = document.getElementById("initial-main")
const watchlistPopulatedMain = document.getElementById("populated-main")
const deleteBtns = document.getElementsByClassName("delete-button")
const toggleBtn = document.getElementById('toggle-button')
let values = []
let keys = Object.keys(localStorage)
let i = keys.length


while ( i-- ) {
    values.push(localStorage.getItem(keys[i]))
}

window.onload = () => {
    if (window.localStorage.length != 0) {
        watchlistInitialMain.style.display = 'none'
        watchlistPopulatedMain.style.display = 'block' 

        getWatchlistHtml()
    
        for (let i = 0; i < deleteBtns.length; i++) {
            deleteBtns[i].addEventListener('click', () => {
                localStorage.removeItem(keys[deleteBtns[i].id])

                deleteBtns[i].innerHTML = `
                <p>Removed</p>
                `
                deleteBtns[i].disabled = true
            })
        }
    } 
}

const darkMode = () => {
    if (document.getElementById('toggle-button').checked) {
        for (const el of document.getElementsByTagName('*')) {
            el.classList.add('dark')
        }
    } else {
        for (const el of document.getElementsByTagName('*')) {
            el.classList.remove('dark')
        }
    }
}

toggleBtn.addEventListener('click', () => {
    darkMode()
})

export {watchlistPopulatedMain, values, toggleBtn, darkMode}