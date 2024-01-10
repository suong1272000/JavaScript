//prinitive type: str,number, null, undefined, bool
//reference type: 내가 만든 타입 

//object
//key[중복 안됨/ string or number] - value[중복 가능/ any-type]

const car = {
    name: {
        brand: 'benz',
        serialNumber: 'G12Q54',
    },
    price: 6000,
    color: 'white',
    builtyear: 2024,
    drive:function(){
        window.console.log('부릉부릉')
    },
}

// car.name
// car['name'] //두가지 방법으로 사용

console.log(car.name.serialNumber) //G12Q54
console.log(car.drive()) //부릉부릉'