//버튼을 누르면 새해복 많이 받으세요 내용의 div 태그 생성

const button = document.querySelector('.button')
//addEventListener('어떤종류의 이벤트?', 어떤 기능을?)
button.addEventListener('click', makeHappyNewYear)

//함수 정의 [hello 정의(만듬)]
function hello(){
    window.console.log("안녕!")
}

function legend(x){
    window.console.log(`${x}은 레전드다.`)
}

function makeHappyNewYear(){
    const div = document.createElement('div')
    div.innerHTML = '새해복 많이 받으세요'
    const body = document.querySelector('body')
    body.appendChild(div)
    }

//hello() //함수 실행

// legend('3')
// legend('비행기 표값')
// legend('레넥톤')