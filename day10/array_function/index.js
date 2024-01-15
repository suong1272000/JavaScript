//map (변경/치환/change/변환)
const arr = [1,2,3,4,5]
// const newArr = arr.map((value)=> value*value)
//100
// const newArr = arr.map((value)=> value+1000)
//홀수면 제곱 짝수면 +10
// const newArr = arr.map((value) => value % 2 == 0 ? value + 10 : value*value)

const arr1 = ['storm', 'mapo', 'olive', 'flirting']
//알파벳에 o가 들어가면 대문자

const newArr1 = arr1.map((value)=> {
    if(value.includes('o')){
        return value.toUpperCase()
    }
    else value
})
//4글자보다 작으면 숫자 4글자보다 크면 대문자

const newArr2 =arr1.map((value)=>{
    if(value.length <= 4){
        return value.length
    }else{
        return value.toUpperCase()
    }
})

const soccer = [
    {
        nation: 'korea',
        rank: 22
    },
    {
        nation: 'japan',
        rank: 18
    },
    {
        nation: 'china',
        rank: 104
    },
]

//nation은 대문자로 , rank는 그대로 출력 , 랭킹 각각 10 더하기
const newSoccer = soccer.map((value)=>
    value.rank <= 30 ? (value.underdog = false, value) : (value.underdog = true, value))

const test = [{
    "dateTime": "2024-01-15T08:38:59.299+0000",
    "type": "view",
    "queryItemId": "8809826712287", // o
    "item": {
        "itemId": "8809826712287",
        "imageUrl": "10/0000/0013/A00000013906339ko.jpg?l=ko",
        "itemName": "정샘물 에센셜 스킨 누더 쿠션 (본품+리필) 택 1", //o
        "itemUrl": "goodsNo=A000000139063",
        "categoryId": "10000010002",
        "brandId": "A003055",  // o
        "count": 220, // o
        "rank": null,
        "rankDiff": null,
        "countDiff": null,
        "id": "8809826712287"
    }
}]

//const a = test.map((value))
const newTest = test.map((value)=> {
    const queryItemId = value.queryItemId
    const itemName = value.item.itemName
    const brandId = value.item.brandId
    const count = value.item.count

    const newObj = {
        queryItemId: queryItemId,
        itemName: itemName,
        brandId: brandId,
        count: count
    }
    return newObj
})