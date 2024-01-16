//"01033334444" "027778888" => *******4444, *****8888
const number = '01033334444'
const number1 = '027778888'
const arrNum = number.split('')
const newArr = arrNum.map((value,index)=>{
    if(number.length - index > 4) value = '*'
    return value
})
newArr.join('') //*******4444

