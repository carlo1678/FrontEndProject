const userInput = document.querySelector(".searchInput")
const apiPull = async () => {
    let response = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${userInput.value}&api-key=5BRNX9snHaZ283VWQa3Cui2EWgzQqo5G`)
    let json = await response.json()
    let moviePull = json.results
    console.log()
    let counter = 1
    for (movie of moviePull) {
        if (counter > 3) break
        const grabHeader = document.querySelector(`.card__header${counter}`)
        grabHeader.innerText = movie.display_title
        const grabText = document.querySelector(`.card__text${counter}`)
        grabText.innerText = movie.summary_short
        const grabButton = document.querySelector(`.card__btn${counter}`)
        grabButton.addEventListener("click", function(){
            location.href = movie.link.url
        })
        counter += 1
        console.log(moviePull)
        
    }

    return json
}

const grabInput = document.querySelector(".searchButton")
grabInput.addEventListener("click", () => apiPull())
