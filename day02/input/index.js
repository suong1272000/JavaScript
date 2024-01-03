const text = document.querySelector('.text')
const button = document.querySelector('.button')
const box = document.querySelector('.box')

let inputValue

text.addEventListener('input', function(e){
    inputValue = e.target.value
})
button.addEventListener('click', function(e){
    const txt = document.createElement('div')
    txt.innerHTML = inputValue
    box.appendChild(txt)
    text.value = ''
})