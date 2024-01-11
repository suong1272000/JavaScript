const monitor = {
    brand: 'nobrand',
    inch: 25,
    price: 110000,
    modelName: 'mega001'
}
// monitor.brand
// monitor['brand']

// for(let key in monitor){
//     console.log(`key:${key}, value:${monitor[key]}`)
// } 

const keys = Object.keys(monitor) //()의 key값을 const
const values = Object.values(monitor) //()의 value를 const
console.log(keys, values) // key값과 value들을 console에 출력

const {inch, price} = monitor //필요한 정보만 가져와야할 때 사용