//1. 일반함수
// function removeLoveTeeth(){}
//2. 익명함수
// function(){}
//3. 콜백함수
// box.addeventListener(`click`, 콜백함수)

//4. 화살표 함수 (매개변수)=>{로직}
// function add(a,b){
//     return a+b
// }
// const add = (a,b) => a+b //로직이 한줄이라면
// const multi = (a,b) => a*b
// const minus = (a,b) => a-b
// const something = (a,b) => {
//     const result = a+b
//     return result * 2
// }
//1. 어떤 문자열이 들어오면 그것을 대문자화 시켜서 돌려주는 함수
//2. 어떤 문자열이 들어오면 맨뒤에 엄준식을 붙혀서 돌려주는 함수
const upper = (x) => x.toUpperCase()
const umm = (x) => x+'엄준식'
//문자열이 세개 매개변수로 왔을 때 , 서로 다 이어주는 함수
const plus = (a,b,c) => a+b+c
//홀짝 알려주는 함수
const odd = (i) => i % 2 === 0 ? "짝수" : "홀수"
//어떤 문제가 들어올때, 앞에 "찐막" 뒤에 "찐막"
const zzin = (x) => "찐막"+x+"찐막"

//1. 객체가 들어오면 umm: '엄준식' 생성하는 함수 만들기
//2. 객체{name: 'latte', price:'2500'} => LATTE, 3500
const a = {
    coffee:'americano',
    price: 2500,
}
const addUmm = (x) => x.umm = '엄준식'

const some = (x)=> {
    const name = x.name
    const price = x.price
    x.name = name.toUpperCase() //LATTE
    x.price = price+1000 // 3500
    return x
}
//3. 객체 x = {name: 'latte', price: 2000} 들어오면 
//=> LATTE, 3500, umm: '엄준식'
//4. {name: 'latte', price:2500} + discount: 2250 10프로 깎기
const addSome = (x) => {
    x.name = x.name.toUpperCase()
    x.umm = '엄준식'
    x.discount = x.price - x.price * 10 / 100
    return x
}
//5. 3000원 이상일때 10%할인 3000원미만은 그대로
const discount = (x) => {
    if(x.price >= 3000){
        x.price *= 0.9
    }
    return x
}





