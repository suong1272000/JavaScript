const psw = document.querySelector('.psw')
const eyeBtn = document.querySelector('.eye')
const openEye = `<i class="fa-solid fa-eye"></i>`
const closeEye = `<i class="fa-solid fa-eye-slash"></i>`
eyeBtn.addEventListener('click', function(){
    const eye = psw.type === "text" ? closeEye : openEye
    eyeBtn.innerHTML = eye
    psw.type = psw.type === "text" ? 'password' : 'text'
})