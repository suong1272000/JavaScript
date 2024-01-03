const menuBox = document.querySelector('.menuBox')
const openButton = document.querySelector('.openButton')
const closeButton = document.querySelector('.closeButton')

openButton.addEventListener('click', openMenu)
closeButton.addEventListener('click', function(){
    menuBox.style.display = 'none'
    openButton.style.display = 'block'
    closeButton.style.display = 'none'
})

menuBox.style.display = 'none'
closeButton.style.display = 'none'

function openMenu(){
    menuBox.style.display = 'block'
    openButton.style.display = 'none'
    closeButton.style.display = 'block'
}

// function closeMenu(){
//     menuBox.style.display = 'none'
//     openButton.style.display = 'block'
//     closeButton.style.display = 'none'
// }