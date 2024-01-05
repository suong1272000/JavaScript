const nameInput = document.querySelector('.name')
const countInput = document.querySelector('.count')
const tokenInput = document.querySelector('.token')
const completeBtn = document.querySelector('.complete')
const cardContainer = document.querySelector('.card-container')

let nameValue
nameInput.addEventListener('input', function(e){
    nameValue = e.target.value
})
let countValue
countInput.addEventListener('input', function(e){
    countValue = e.target.value
})
let tokenValue
tokenInput.addEventListener('input', function(e){
    tokenValue = e.target.value
})

completeBtn.addEventListener('click', function(e){
    const card = makeCard(nameValue, countValue, tokenValue)
    cardContainer.appendChild(card)
    clearInput(nameInput, countInput, tokenInput)
})

function makeCard(nameValue, countValue, tokenValue){
    const card = document.createElement('section')
    card.className = 'card'
    const title = document.createElement('h3')
    title.className = 'cardTitle'
    title.innerHTML = nameValue
    const count = document.createElement('span')
    count.className = 'cardCount'
    count.innerHTML = countValue
    const token = document.createElement('button')
    token.className = 'cardToken'
    token.innerHTML = tokenValue
    card.appendChild(title)
    card.appendChild(count)
    card.appendChild(token)
    return card
}
function clearInput(nameInput, countInput, tokenInput){
    nameInput.value= ''
    countInput.value= ''
    tokenInput.value= ''
}