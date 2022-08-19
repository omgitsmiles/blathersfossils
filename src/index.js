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
        speechBubble.innerHTML = ''
        const img = document.createElement('img')
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        h2.innerText = `You've found ` + selectFossil.name['name-USen']
        p.innerText = selectFossil['museum-phrase']
        img.src = selectFossil['image_uri']
        speechBubble.append(h2, img, p)
    }


    //sort the matching problem, maybe match w regex? tried item === string
    function renderBugs(bugs, string){
        speechBubble.innerHTML = ''
        const search = string => {
            const searchTerms = Object.keys(bugs)
            const searchResults = searchTerms.filter(item => item.includes(string)) 
                return searchResults
            }
        console.log(search(string))
        const results = search(string)
        const buggos = bugs[results]
        const h2 = document.createElement('h2')
        const img = document.createElement('img')
        const p = document.createElement('p')
        if (results.length > 1) {
            h2.innerText = 'Hoo! Which one?'
            speechBubble.append(h2)
            results.forEach(item => {
            const selectBugs = bugs[item]
            const div = document.createElement('div')
            div.innerText = selectBugs.name['name-USen']
            speechBubble.append(div)
            div.addEventListener('click', () => {
                speechBubble.innerHTML = ''
                h2.innerText = selectBugs.name['name-USen']
                img.src = selectBugs['icon_uri']
                p.innerText = selectBugs['museum-phrase']
                speechBubble.append(h2, img, p)
            })
        })
        } else if (results.length == 1) {
        h2.innerText = buggos.name['name-USen']
        img.src = buggos['icon_uri']
        p.innerText = buggos['museum-phrase']
        speechBubble.append(h2, img, p)
        } else return searchError()
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
        fetch(baseURL + '/bugs')
        .then(res => res.json())
        .then(bugs => renderBugs(bugs, e.target.search.value.toLowerCase()))
        .catch(() => searchError())
    })

    donate.addEventListener('click', (e) => {
        //if i declare the search event listner will it be able to pass select fossil here?
        //pass global variable assign it to selected fossil
        //take the renderfossil that was appended to speechbubble
        //append image below blathers and donation button
        //write a quick thank you from blathers
    })

})




// let str = bugs.name['name-USen']
// if (str.toLowerCase().includes(bugs))

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