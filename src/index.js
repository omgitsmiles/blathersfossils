document.addEventListener('DOMContentLoaded', () => {
    const baseURL = 'https://acnhapi.com/v1/fossils'
    const dig = document.getElementById('dig-btn')
    const donate = document.getElementById('donate-btn')
    const sell = document.getElementById('sell-btn')
    const speechBubble = document.getElementById('speech-bubble')
    
    function renderFossil(fossils){
        let randomFossil = Math.floor(Math.random() * fossils.length)
        // debugger
        console.log(randomFossil)
        speechBubble.innerHTML = ''
        const img = document.createElement('img')
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        h2.innerText = `You've found ` + fossils.amber.name['name-USen']
        p.innerText = fossils.amber['museum-phrase']
        console.log(fossils.amber.name['name-USen'])
        img.src = fossils.amber['image_uri']
        console.log(img)
        speechBubble.append(h2, img, p)
    }

    function sellFossil(fossils) {
        speechBubble.innerHTML = ''
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        h2.innerText = fossils.amber.price
        p.innerText = 'Hoo! oh my. You sure you wanna sell it?'
        speechBubble.append(h2, p)
    }

    dig.addEventListener('click', (e) => {
       fetch(baseURL)
       .then(res => res.json())
       .then(fossils => renderFossil(fossils))
    })

    sell.addEventListener('click', (e) => {
        fetch(baseURL)
        .then(res => res.json())
        .then(fossils => sellFossil(fossils))
    })

    donate.addEventListener('click', (e) => {
        console.log('donate!')
    })

})


// fossils.amber.name['name-USen']