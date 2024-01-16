import { data } from "./data.js";
import { listData, newData } from "./object.js";

function renderCard(listData){
    for(let i = 0; i < 100; i++){
        const container = document.querySelector('.container')
        container.insertAdjacentHTML('beforeend',`
        <div class="cardBox">
            <img src="${listData[i].image}" alt="">
            <h2>${listData[i].title}</h2>
            <p>${listData[i].runtime}</p>
        </div>
        `)
    }
}

renderCard(listData)