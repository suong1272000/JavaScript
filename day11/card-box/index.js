import { data } from "./data.js";

const newData = data.data[0].data;

//card 추가하기
const newArr = newData.forEach((value) => {
    function renderCard(){
        const container = document.querySelector('.container')
        container.insertAdjacentHTML('beforeend',`
        <div class="cardBox">
            <img src="${value.images.poster_url}" alt="">
            <h3>${value.title}</h3>
            <p>${value.running_time_friendly}</p>
        </div>
        `)}
    return renderCard()
})


