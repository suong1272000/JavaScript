const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const num = document.querySelector('.num')

let a = 0
minus.addEventListener('click', function(){
    num.innerHTML = parseInt(num.innerHTML) - 1 //parseInt 타입변환
})
plus.addEventListener('click', function(){
    a = a +1
    num.innerHTML = a //암묵적 타입변환 지양
})