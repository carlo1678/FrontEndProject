const userInput = document.querySelector(".searchInput")
const apiPull = async () => {
    let response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${userInput.value}&api-key=5BRNX9snHaZ283VWQa3Cui2EWgzQqo5G`) 
    let json = await response.json()
    console.log(json)
    let jsonResponse = json.response.docs
    console.log(jsonResponse)
    let counter = 1
    // const grabCardArray = document.querySelectorAll(".card") // returns an array of cards
    for (const doc of jsonResponse) {
    if (counter > 6) break
    console.log(doc)
    const grabCard = document.querySelector(`#card${counter}`)
    const img = document.createElement("img")
    img.classList = "article-image"
    img.src = "https://static01.nyt.com/" + doc.multimedia[0].url
    img.height = "250"
    img.width = "600"
    grabCard.addEventListener("click", function(){
        location.href = doc.web_url
    },false)
    grabCard.innerHTML = doc.abstract
    grabCard.prepend(img)
    const titles = doc.abstract
    counter += 1
    }
       return json
} 
    // grabCard = [cardElemets <div>]
    // for (let index = 0; index < grabCardArray.length; index++) {

    //     const element = grabCardArray[index];
    //     grabCardArray[index].innerHTML =jsonResponse[index].abstract
    //     grabCardArray[index].addEventListener("click", ()=> {
    //          location.href = jsonResponse[index].web_url
    //     })
        
    // }

    
    // const title = jsonResponse[0].abstract
    // console.log(doc.abstract)
    // for (const title in doc) {
    
    
    // for (let t=0 t < titles.length) {
    //     console.log(title[0])
    // }
    

    

const grabInput = document.querySelector("#searchButton")
grabInput.addEventListener("click", () => apiPull())



// Run a for loop with let doc of json.response.docs and then loop through all different ones












