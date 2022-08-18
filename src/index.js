document.addEventListener('DOMContentLoaded', () => {
    const baseURL = 'https://acnhapi.com/v1'
    const dig = document.getElementById('dig-btn')
    const donate = document.getElementById('donate-btn')
    const search = document.getElementById('searchform')
    const speechBubble = document.getElementById('speech-bubble')
    
    function renderFossil(fossils){
        const fossilArr =  Object.keys(fossils)
        let randomFossil = fossilArr[Math.floor(Math.random() * fossilArr.length)]
        const selectFossil = fossils[randomFossil]
        console.log(fossils[randomFossil])
        speechBubble.innerHTML = ''
        const img = document.createElement('img')
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        h2.innerText = `You've found ` + selectFossil.name['name-USen']
        p.innerText = selectFossil['museum-phrase']
        img.src = selectFossil['image_uri']
        speechBubble.append(h2, img, p)
    }

    function renderBugs(bugs, string){
        console.log(bugs)
        speechBubble.innerHTML = ''
        const search = (string) => {
            const searchTerms = Object.keys(bugs)
            const searchResults = searchTerms.filter(item => item.includes(string))
                return searchResults
            }
        console.log(search(string))
        const results = search(string)
        console.log(results)
        const div = document.createElement('div')
        // let str = bugs.name['name-USen']
        // if (str.toLowerCase().includes(bugs))
        // const h2 = document.createElement('h2')
        // const img = document.createElement('img')
        // const p = document.createElement('p')
        // h2.innerText = bugs.name['name-USen']
        // img.src = bugs['icon_uri']
        // p.innerText = bugs['museum-phrase']
        // speechBubble.append(h2, img, p)
            div.innerText = results[0]
            speechBubble.append(div)

    }

    function searchError() {
        alert('Hoo! Sorry, Couldn\'t find it.')
    }

    dig.addEventListener('click', (e) => {
       fetch(baseURL + '/fossils')
       .then(res => res.json())
       .then(fossils => renderFossil(fossils))
    })

    search.addEventListener('submit', (e) => {
        e.preventDefault()
        // console.log(e.target.search.value)
        fetch(baseURL + '/bugs')
        .then(res => res.json())
        .then(bugs => renderBugs(bugs, e.target.search.value))
        .catch(() => searchError())
    })

    donate.addEventListener('click', (e) => {
        //take the renderfossil that was appended to speechbubble
        
        //append image below blathers and donation button
        //write a quick thank you from blathers
    })

})


// fossils.amber.name['name-USen']
// ${e.target.search.value.toLowerCase()}

// turn into the array, define in global scope to the math function can bring a random num
// getMakeup()
// .then(res => {
//     allProducts.push(...res)
//     // document.getElementById("products").addEventListener('change', displayProducts)
// })

//

//