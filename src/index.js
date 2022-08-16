document.addEventListener('DOMContentLoaded', () => {
    const baseURL = 'https://acnhapi.com/v1/fossils'
    const dig = document.getElementById('dig-btn')
    const donate = document.getElementById('donate-btn')
    const sell = document.getElementById('sell-btn')
    const speechBubble = document.getElementById('speech-bubble')

    function renderFossil(fossil){
        speechBubble.innerHTML = ''
        let randomFossil = fossil[Math.floor(Math.random() * fossil.length)]
        const img = document.createElement('img')
        const p = document.createElement('p')
        img.src = fossil.image_url
        speechBubble.append(img, p)
    }
    dig.addEventListener('click', (e) => {
       console.log('dig!')
    })

    sell.addEventListener('click', (e) => {
        console.log('HOO HOO')
    })

    donate.addEventListener('click', (e) => {
        console.log('donate!')
    })

})
