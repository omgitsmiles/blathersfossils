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
        img.className = 'fossilImg'
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        h2.innerText = `You've found an ` + selectFossil.name['name-USen']
        p.innerText = selectFossil['museum-phrase']
        img.src = selectFossil['image_uri']
        img.alt = selectFossil.name['name-USen']
        speechBubble.append(h2, img, p)
}
    
    donate.addEventListener('click', () => {
    // debugger
    if (speechBubble.innerHTML.includes('fossils')) {
        let fossilImg = document.querySelector('.fossilImg')
        const contOne = document.getElementById('cont1')
        const contTwo = document.getElementById('cont2')
        const contThree = document.getElementById('cont3')
        // fossilImg.src = selectFossil['image_uri']
        // fossilImg.alt = selectFossil.name['name-USen']
        //if else statements for container
        console.log(fossilImg)
        // if (contOne.innerHTML === ''){
        //     contOne.append(fossilImg)
        // } else if (contOne.innerHTML.includes('fossil')){
        //     contTwo.append(fossilImg)
        // } else if (contTwo.innerHTML.includes('fossil')){
        //     contThree.append(fossilImg)
        // }
        if (contOne.innerHTML === ''){
            contOne.append(fossilImg)
        } else if (contTwo.innerHTML === ''){
            contTwo.append(fossilImg)
        } else if (contThree.innerHTML === ''){
            contThree.append(fossilImg)
        }
        // switch('') {
        //     case contOne.innerHTML:
        //         contOne.append(fossilImg)
        //         break
        //     case contTwo.innerHTML:
        //         contTwo.append(fossilImg)
        //         speechBubble.innerHTML = 'Another donation! Thank you!'
        //         break
        //     case contThree.innerHTML:
        //         contThree.append(fossilImg)
        //         speechBubble.innerHTML = 'HOO! Another amazing piece to add to the museum. Thank hoo!'
        //         break
        //         default:
        //         fullMuseum()
        // }
        // debugger
        speechBubble.innerHTML = 'HOO! This will make an excellent addition for the museum!'
    } else if (speechBubble.innerHTML.includes('bugs')) {
        speechBubble.innerHTML = 'Hooooo..... WHO!? Get it away! Fossils only'
    } else speechBubble.innerHTML = 'Zzzz...Zzzz..Zzzz...'
    })

    function renderBugs(bugs, string){
        speechBubble.innerHTML = ''
        const search = string => {
            const searchTerms = Object.keys(bugs)
            const searchResults = searchTerms.filter(item => item.includes(string)) 
                return searchResults
            }
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
        } else if (results.length === 1) {
        h2.innerText = buggos.name['name-USen']
        img.src = buggos['icon_uri']
        p.innerText = buggos['museum-phrase']
        speechBubble.append(h2, img, p)
        } else return searchError()
    }

    function searchError() {
        alert('Hoo! Sorry, Couldn\'t find it.')
        speechBubble.innerHTML = 'Hoo! I hate bugs! Try another search.'
    }
    
    function fullMuseum() {
        speechBubble.innerText = 'The museum is full!'
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

  //if i declare the search event listner will it be able to pass select fossil here?
            //pass global variable assign it to selected fossil
            //take the renderfossil that was appended to speechbubble
            //append image below blathers and donation button
            //write a quick thank you from blathers

// if (speechBubble.innerHTML.includes('fossils'))

// function donateFossil(fossils) {
//     if (speechBubble.innerHTML.includes('fossils')) {
//     let fossilImg = document.querySelector('.fossilImg')
//     const contOne = document.getElementById('cont1')
//     const contTwo = document.getElementById('cont2')
//     const contThree = document.getElementById('cont3')
//     switch('') {
//         case contOne.innerHTML:
//             contOne.append(fossilImg)
//             break
//         case contTwo.innerHTML:
//             contTwo.append(fossilImg)
//             break
//         case contThree.innerHTML:
//             contThree.append(fossilImg)
//             break
//             default:
//                 fullMuseum()
//             }
//             speechBubble.innerHTML = 'HOO! This will make an excellent addition for the museum!'
//         } else if (speechBubble.innerHTML.includes('bugs')) {
//             speechBubble.innerHTML = 'Hooooo..... WHO!? Get it away! Fossils only'
//         } else speechBubble.innerHTML = 'Zzzz...Zzzz..Zzzz...'
//     }