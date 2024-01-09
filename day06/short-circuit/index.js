const idInput = document.querySelector('.id')
const pwInput = document.querySelector('.pw')
const loginButton = document.querySelector('.login')
const loginBox = document.querySelector('.loginBox')

let pwValue
pwInput.addEventListener('input', function(e){
    pwValue = e.target.value
})
loginButton.addEventListener('click', function(e){
    if(pwValue === '1234!'){
        loginBox.innerHTML = ''
        const backendNickname = null
        const nickname = backendNickname || 'guest' //백엔드 로그인 닉네임 가져오는 코드
        loginBox.insertAdjacentHTML('beforeend', `<span>${nickname}님 환영합니다</span>`)
    }else{
        window.alert('비밀번호 확인해주세요!')
    }
})