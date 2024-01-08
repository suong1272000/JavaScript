//두숫자를 입력받고 큰수를 alert으로 뱉게 만들기
// let a = parseInt(window.prompt("첫번째 숫자:"))
// let b = parseInt(window.prompt("두번째 숫자:"))
// window.alert(a > b ? a : b)
//어떤 숫자를 입력하고 홀짝 구분해서 출력하기
// let a = parseInt(window.prompt("숫자 입력"))
// let e = a % 2 === 0 ? "짝수" : "홀수"
// window.alert(e)
//태어난 년도를 입력했을 때 나이 출력
// let a = parseInt(window.prompt("태어난 년도"))
// let e = 2025 - a
// window.alert(e)
//반지름을 입력시 원의 넓이와 둘레 출력
// let a = parseInt(window.prompt("반지름 값"))
// let e = 3.14 ** 2 * a
// let b = 3.14 * 2 * a
//한 변의 길이를 입력시 정사각형의 넓이와 둘레 출력
// let a = parseInt(window.prompt("한변의 길이 입력:"))
// let e = a ** 2
// let d = a * 4
// window.alert(`넓이${e} 둘레${d}`)
// 1000 이하 양의 정수를 입력받고 72 -> 1분 12초로 출력
let a = parseInt(window.prompt("정수 입력:"))
let e = parseInt(a / 60)
let b = a % 60
window.alert(`${e}분 ${b}초`)


