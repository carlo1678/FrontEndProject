const userInput = document.querySelector(".searchInput")
const apiPull = async () => {
    let response = await fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${userInput.value}&api-key=5BRNX9snHaZ283VWQa3Cui2EWgzQqo5G`) 
    let json = await response.json()
    let authorResponse = json.results
    let counter = 1
    for (author of authorResponse) {
        if (counter > 9) break
        const grabCardBody = document.querySelector(`.card-body${counter}`)
        grabCardBody.addEventListener("click", function(){
            location.href = author.url
        })
        const grabCardTitle = document.querySelector(`.card-title${counter}`)
        grabCardTitle.innerText = author.book_title 
        const grabCardAuthor = document.querySelector(`.card-author${counter}`)
        grabCardAuthor.innerText = author.book_author
        const img = document.createElement("img")
        img.height = "125"
        img.width = "300"
        img.src = "https://i.pinimg.com/originals/62/7a/07/627a070b405403cda20e8a66d09c405a.gif"
        grabCardBody.prepend(img)
        // const grabCardLink = document.querySelector(`.card-link${counter}`)
        // const grabCard = document.querySelector(`card${counter}`)
        // grabCard.addEventListener("click", function(){
        //     location.href = author.url
        // },false)
        counter += 1
    }
    return json
    
}
const grabInput = document.querySelector(".searchButton")
grabInput.addEventListener("click", () => apiPull())
