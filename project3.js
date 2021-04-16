const userInput = document.querySelector(".searchInput")
const apiPull = async () => {
    // loop through tags, set innerHTML as empty string
    // const grabParagraphs = document.querySelectorAll("p")
    // grabParagraphs.forEach((a) => {a.innerHTML = ""})
    // if ()
    let response = await fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${userInput.value}&api-key=5BRNX9snHaZ283VWQa3Cui2EWgzQqo5G`) 
    let json = await response.json()
    let authorResponse = json.results
    let counter = 1
    console.log(authorResponse)
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
        const grabImg = document.querySelector(`.card-image${counter}`)
        grabImg.height = "125"
        grabImg.width = "300"
        grabImg.src = "https://i.pinimg.com/originals/62/7a/07/627a070b405403cda20e8a66d09c405a.gif"
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
