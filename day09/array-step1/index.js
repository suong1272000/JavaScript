//list1~100 짝수 토끼 6의배수 당근
// const arr = []
// for(let i=1; i<=100; i++){
//     if(i % 6 === 0){
//         arr.push('🥕')
//     }else if(i % 2 === 0){
//         arr.push('🐰')
//     }else{
//         arr.push(i)
//     }
// }
// console.log(arr)

//홀수는🐶 짝수는🐱 3의배수🐰 4의배수🐭 7의배수 "윤지님"
const arr = []
for(let i=1; i<=100; i++){
    if(i % 3 === 0){
        arr.push('🐰')
    }else if(i % 4 === 0){
        arr.push('🐭')
    }else if(i % 7 === 0){
        arr.push('윤지님')
    }else if(i % 2 === 1){
        arr.push('🐶')
    }else if(i % 2 === 0){
        arr.push('🐱')
    }
}
console.log(arr)

const arr1 = []
for(let i = 1; i <= 100; i++){
    if (i % 2 == 1){
        if(i % 3 === 0) arr1.push('토끼')
        else if(i % 7 === 0) arr1.push('윤지님')
        else arr1.push('강아지')
    }
    else{
        if(i % 4 === 0) arr1.push('쥐')
        else arr1.push('고양이')
    }
}

console.log(arr1)