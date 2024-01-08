const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const num = document.querySelector('.num')
const submit = document.querySelector('.submit')

minus.addEventListener('click', function(e){
    const n = parseInt(num.innerHTML)
    if(n > 0){
        num.innerHTML = n - 1
    }
})
plus.addEventListener('click', function(){
    const n = parseInt(num.innerHTML)
    num.innerHTML = n + 1
})
submit.addEventListener('click', function(){
    if(n > 0){
        alert(`${n}개 수량이 발송되었습니다.`)
    }else{alert('수량을 입력해주세요.')}
})

const text = document.querySelector('.inputBox')
const inputNum = document.querySelector('.inputNum')

text.addEventListener('input',function(e){
    const length = e.target.value.length
    if(length <= 20){
        inputNum.innerHTML = length
    }else{
        e.target.value = e.target.value.subString(0,20)
    }
})

