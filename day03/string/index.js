const text = document.querySelector('.inputBox')
const num = document.querySelector('.num')

text.addEventListener('input',function(e){
    num.innerHTML = e.target.value.length
})