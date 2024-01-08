//자동화시키고 싶을때 컨트롤하고 싶을때 control statement (제어문): 코드를 순서 조작
//conditional statement(조건문)
//[if, switch]

//if문 ~ else문

// const a = window.prompt('숫자 입력:')
// const b = parseInt(a)
// if(b>0){
//     alert('b는 양수입니다.')
// }else if(b === 0){
//     alert('0 입니다.')
// }else{alert('음수입니다.')}
// alert('끝')

//영어점수 몇점?
//90 - 'A', 80 - 'B', 70 - 'C', 70 미만 - 'F'

// const a = window.prompt('영어 점수:')
// const b = parseInt(a)
// if(a >= 90){
//     alert('A')
// }else if(90 > a && a >= 80){
//     alert('B')
// }else if(80 > a && a >= 70){
//     alert('C')
// }else{alert('F')}

//교보문고 구매 프로그램
//50000 - 주차 5시간, 30000 - 주차 3시간, 20000 - 주차 2시간

// const a = parseInt(window.prompt('금액입력:'))
// if(a >= 50000){
//     alert('주차 5시간')
// }else if(50000 > a && a >= 30000){
//     alert('주차 3시간')
// }else if(30000 > a && a >= 20000){
//     alert('주차 2시간')
// }else{alert('주차권 없음')}

//양의 홀짝 음의 홀짝인지 구분
// const a = parseInt(window.prompt('숫자 입력 : '))
// if(a>0 && a%2===0){alert('양수 짝수')}
// else if(a<0 && a%2===0){alert('음수 짝수')}
// else if(a>0 && !(a%2===0)){alert('양수 홀수')}
// else if(a<0 && !(a%2===0)){alert('음수 홀수')}
// else{alert('0')}

const a = parseInt(window.prompt('숫자 입력 : '))
if(a > 0){
    if(a % 2 === 0){
        alert('양의 짝수')
    }else{
        alert('양의 홀수')
    }
}else if(a < 0){
    if(a % 2 === 0){
        alert('음의 짝수')
    }else{
        alert('음의 홀수')
    }
}else{alert('0입니다.')}