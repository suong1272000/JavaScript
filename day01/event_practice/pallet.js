const pallet = document.querySelector('.pallet')
const redButton = document.querySelector('.red')
redButton.addEventListener('click', redView)
function redView(){
    pallet.innerHTML = '선택된 색깔은 빨강입니다.'
    pallet.style.backgroundColor = 'red'
}
const orangeButton = document.querySelector('.orange')
orangeButton.addEventListener('click', orangeView)
function orangeView(){
    pallet.innerHTML = '선택된 색깔은 주황입니다.'
    pallet.style.backgroundColor = 'orange'
}
const yellowButton = document.querySelector('.yellow')
yellowButton.addEventListener('click', yellowView)
function yellowView(){
    pallet.innerHTML = '선택된 색깔은 노랑입니다.'
    pallet.style.backgroundColor = 'yellow'
}