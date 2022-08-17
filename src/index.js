document.addEventListener('DOMContentLoaded', () => {
    const baseURL = 'https://acnhapi.com/v1'
    const dig = document.getElementById('dig-btn')
    const donate = document.getElementById('donate-btn')
    const search = document.getElementById('searchform')
    const speechBubble = document.getElementById('speech-bubble')
    
    function renderFossil(fossils){
        const fossilArr =  Object.keys(fossils)
        let randomFossil = Math.floor(Math.random() * fossilArr.length)
        // debugger
        console.log(randomFossil)
        speechBubble.innerHTML = ''
        const img = document.createElement('img')
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        h2.innerText = `You've found ` + fossils.amber.name['name-USen']
        p.innerText = fossils.amber['museum-phrase']
        console.log()
        img.src = fossils.amber['image_uri']
        console.log(img)
        speechBubble.append(h2, img, p)
    }

    function searchBugs(bugs) {
        if (bugs)
        speechBubble.innerHTML = ''
        const h2 = document.createElement('h2')
        const img = document.createElement('img')
        const p = document.createElement('p')
        h2.innerText = bugs.name['name-USen']
        img.src = bugs['icon_uri']
        p.innerText = bugs['museum-phrase']
        speechBubble.append(h2, img, p)
    }

    dig.addEventListener('click', (e) => {
       fetch(baseURL + '/fossils')
       .then(res => res.json())
       .then(fossils => renderFossil(fossils))
    })

    search.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(e.target.search.value)
        fetch(baseURL + `/bugs/${e.target.search.value}`)
        .then(res => res.json())
        .then(bugs => searchBugs(bugs))
    })

    donate.addEventListener('click', (e) => {
        console.log('donate!')
    })

})


// fossils.amber.name['name-USen']

// turn into the array, define in global scope to the math function can bring a random num
// getMakeup()
// .then(res => {
//     allProducts.push(...res)
//     // document.getElementById("products").addEventListener('change', displayProducts)
// })