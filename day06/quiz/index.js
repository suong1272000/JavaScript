// const nexon = document.querySelector('.nexon')
// const privacy = document.querySelector('.privacy')
// const optional = document.querySelector('.optional')
// const nextBtn = document.querySelector('.nextBtn')

// nextBtn.addEventListener('click', function(e){
//     let e = privacy.checked && nexon.checked
//     if(e == true){
//         alert('가입완료')
//     }else{
//         alert('필수 항목을 체크해주십시오')
//     }
// })

let isNexonChecked = false
let isPrivacyChecked = false

const nexon = document.querySelector('.nexon')
const privacy = document.querySelector('.privacy')
const optional = document.querySelector('.optional')
const nextBtn = document.querySelector('.nextBtn')

nexon.addEventListener('click', function(e){
    isNexonChecked = e.target.checked
    if(isNexonChecked && isPrivacyChecked){
        nextBtn.style.background = 'green'
    }else{
        nextBtn.style.background = 'tomato'
    }
})
privacy.addEventListener('click', function(e){
    isPrivacyChecked = e.target.checked
    if(isNexonChecked && isPrivacyChecked){
        nextBtn.style.background = 'green'
    }else{
        nextBtn.style.background = 'tomato'
    }
})
nextBtn.addEventListener('click',function(e){
    if(isNexonChecked && isPrivacyChecked){
        window.alert('가입 완료')
    }else if(!isPrivacyChecked){
        alert('개인정보 체크해주세요')
    }else{
        alert('넥슨 체크해주세요')
    }
})