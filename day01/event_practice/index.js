const darkButton = document.querySelector('.dark-button')
darkButton.addEventListener('click', darkMode)
function darkMode(){
    const body = document.querySelector('body')
    body.style.backgroundColor = 'black'
}

const whiteButton = document.querySelector('.white-button')
whiteButton.addEventListener('click', whiteMode)
function whiteMode(){
    const body = document.querySelector('body')
    body.style.backgroundColor = 'white'
}