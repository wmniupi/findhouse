window.addEventListener('load', function () {
    let desc_part7 = document.querySelector('.desc_part7');
    let recommends = desc_part7.querySelectorAll('li');
    for (let ele of recommends) {
        touch.on(ele, 'touchstart', function () {
            window.location.href = './resaleHouseDetail.html';
        })
    }
    let morehouse = desc_part7.querySelector('.morehouse');
    touch.on(morehouse, 'touchstart', function () {
        window.location.href = './resaleHouse.html';
    })
})