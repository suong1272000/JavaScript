const button = document.querySelector('.button')
const box = document.querySelector('.result-box')
const title = document.querySelector('.title')
const coin = document.querySelector('.coin')
const total = document.querySelector('.total')
const textBox = document.querySelector('.text-box')
let titleValue
let coinValue
let totalValue
title.addEventListener('input',function(e){
    titleValue = e.target.value
})
coin.addEventListener('input',function(e){
    coinValue = e.target.value
})
total.addEventListener('input',function(e){
    totalValue = e.target.value
})

button.addEventListener('click', function(e){
    const newBox = document.createElement('.result-box')
    const titleResult = document.createElement('span')
    const coinResult = document.createElement('span')
    const totalResult = document.createElement('span')

    newBox = 
    titleResult.innerHTML = titleValue
    coinResult.innerHTML = coinValue
    totalResult.innerHTML = totalValue

    box.appendChild(titleResult)
    box.appendChild(coinResult)
    box.appendChild(totalResult)

    title.value = ''
    coin.value = ''
    total.value = ''
})