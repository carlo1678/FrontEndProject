const userInput = document.querySelector(".searchInput")
const apiPull = async () => { 
    let response = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${userInput.value}&api-key=5BRNX9snHaZ283VWQa3Cui2EWgzQqo5G`)
    let json = await response.json()
    let moviePull = json.results
    let counter = 1
    for (movie of moviePull) {
        if (counter > 3) break
        const grabHeader = document.querySelector(`.card__header${counter}`)
        grabHeader.innerHTML = movie.display_title
        const grabText = document.querySelector(`.card__text${counter}`)
        grabText.innerHTML = movie.summary_short
        const grabButton = document.querySelector(`.card__btn${counter}`)
        grabButton.addEventListener("click", function(){
            location.href = movie.link.url
        })
        counter += 1
        
    }

    return json
}

const grabInput = document.querySelector(".searchButton")
grabInput.addEventListener("click", () => apiPull())
