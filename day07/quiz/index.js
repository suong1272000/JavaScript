//boolean = ice or hot
//img, img경로
//name, engName
//explanation (설명)
//for문 사용 - 나열
const americano = {
    imgSrc:'https://img.79plus.co.kr/megahp/manager/upload/menu/20231206193822_1701859102022_4xp3O1WXqp.jpg',
    name: {
        kor: '아메리카노',
        eng: 'americano'
    },
    ishot: false,
    explanation: '[한정판매] 달달한 바나나 우유 스무디에 톡톡 터지는 팝핑캔디가 가득! 스무디가 된 미니언즈 음료',
}
const latte = {
    imgSrc: 'https://img.79plus.co.kr/megahp/manager/upload/menu/20230905185855_1693907935536_aXkP_SjplJ.jpg',
    name: {
        kor: '라떼',
        eng: 'latte'
    },
    ishot: true,
    explanation: '우리 할머니께서 즐겨드시던 달달한 믹스 커피 스타일로 만든 메가MGC커피만의 메가사이즈 커피 음료',
}

function renderCoffee(x){
    const container = document.querySelector('.container')
    container.insertAdjacentHTML('beforeend',`
    <div class="menuBox">
    <div class="imgBox">
        <div class="ice">${x.ishot ? 'ICE' : 'HOT'}</div>
        <img src="${x.imgSrc}" alt="">
    </div>
    <div class="textBox">
        <h3>${x.name.kor}</h3>
        <div class="line"></div>
        <p>${x.name.eng}</p>
        <p>${x.explanation}</p>
    </div>
    </div>
    `)
}

renderCoffee(americano)
renderCoffee(latte)
