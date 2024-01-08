const inputH = document.querySelector('.height')
const inputW = document.querySelector('.weight')
const button = document.querySelector('.button')

let height
let weight
inputH.addEventListener('input',function(e){
    height = parseInt(e.target.value)
})
inputW.addEventListener('input',function(e){
    weight = parseInt(e.target.value)
})
button.addEventListener('click',function(e){
    const bmi = (weight)/((height/100)**2)
    alert(`BMI는 ${bmi}`)
})