window.addEventListener('load', function () {
    let mask = document.querySelector('.mask');
    let classifyList = document.querySelector('.classify_list');
    let ul = classifyList.querySelector('ul');
    let rest = document.querySelector('.rest');
    let area = document.querySelector('.area');
    let price = document.querySelector('.price');
    let type = document.querySelector('.type');
    let more = document.querySelector('.more');

    let titles = document.querySelectorAll('.title_element');
    let contents = document.querySelectorAll('.content');

    let area_content = document.querySelector('.area_content');
    let price_content = document.querySelector('.price_content');
    let type_content = document.querySelector('.type_content');
    let more_content = document.querySelector('.more_content');

    let list_elements = document.querySelectorAll('.list_element');


    area.style.color = 'rgb(255,138,0)';
    touch.on(area, 'touchstart', function (e) {
        for (let title of titles) {
            title.style.color = '';
        }
        for (let content of contents) {
            content.style.display = 'none'
        }
        this.style.color = 'rgb(255,138,0)';
        area_content.style.display = 'flex';
        e.stopPropagation();
    });
    touch.on(price, 'touchstart', function (e) {
        for (let title of titles) {
            title.style.color = '';
        }
        for (let content of contents) {
            content.style.display = 'none'
        }
        this.style.color = 'rgb(255,138,0)';
        price_content.style.display = 'block';
        e.stopPropagation();
    });
    touch.on(type, 'touchstart', function (e) {
        for (let title of titles) {
            title.style.color = '';
        }
        for (let content of contents) {
            content.style.display = 'none'
        }
        this.style.color = 'rgb(255,138,0)';
        type_content.style.display = 'block';
        e.stopPropagation();
    });
    touch.on(more, 'touchstart', function (e) {
        for (let title of titles) {
            title.style.color = '';
        }
        for (let content of contents) {
            content.style.display = 'none'
        }
        this.style.color = 'rgb(255,138,0)';
        more_content.style.display = 'block';
        e.stopPropagation();
    });
    touch.on(rest, 'touchstart', function (e) {
        mask.style.display = 'none';
        e.stopPropagation();
    })
    touch.on(ul, 'touchstart', function (e) {
        mask.style.display = 'flex';
        e.stopPropagation();
    })
    for (let ele of list_elements) {
        touch.on(ele, 'touchstart', function () {
            window.location.href = './resaleHouseDetail.html';
        })
    }

    let search_msg = document.querySelector('.search_msg');
    let searchbtn = document.querySelector('.searchbtn');

    function search() {
        window.location.href = './resaleHouse.html';
    }
    touch.on(searchbtn, 'tap', search)
    search_msg.addEventListener('keydown', function (e) {
        if (e.key == 'Enter') {
            window.location.href = './resaleHouse.html';
        }
    })

})