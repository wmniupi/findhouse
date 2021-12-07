window.addEventListener('load', function () {
    let attentionbtn = document.querySelector('.attentionbtn');
    let friendlink = document.querySelector('.friendlink');
    let attention_content = document.querySelector('.attention_content');
    let friendlink_content = document.querySelector('.friendlink_content');
    let app_download = document.querySelector('.app_download');
    let closebtn = document.querySelector(".closebtn");
    touch.on(attentionbtn, 'touchstart', function () {
        friendlink.style.borderBottom = '1px solid rgb(255,138,0)';
        this.style.borderBottom = '2px solid rgb(255,138,0)';
        friendlink_content.style.display = 'none';
        attention_content.style.display = 'flex';

    });
    touch.on(friendlink, 'touchstart', function () {
        attentionbtn.style.borderBottom = '1px solid rgb(255,138,0)';
        this.style.borderBottom = '2px solid rgb(255,138,0)';
        attention_content.style.display = 'none';
        friendlink_content.style.display = 'flex';
    });
    touch.on(closebtn, 'tap', function () {
        app_download.style.display = 'none'
    });

    let menu_elements = document.querySelectorAll('.menu_element');

    touch.on(menu_elements[0], 'touchstart', function () {
        window.location.href = './resaleHouse.html';
    })
    touch.on(menu_elements[1], 'touchstart', function () {
        window.location.href = './resaleHouse.html';
    })
    touch.on(menu_elements[2], 'touchstart', function () {
        window.location.href = './rentingHouse.html';
    })
    touch.on(menu_elements[3], 'touchstart', function () {
        window.location.href = './rentingHouse.html';
    })

    let search_bar = document.querySelector('.search_bar');
    let search_logo = document.querySelector('.search_logo');

    function search() {
        window.location.href = './resaleHouse.html';
    }
    touch.on(search_logo, 'tap', search)
    search_bar.addEventListener('keydown', function (e) {
        if (e.key == 'Enter') {
            window.location.href = './resaleHouse.html';
        }
    })
    let house_list_element = document.querySelectorAll('.house_list_element');
    for (let el of house_list_element) {
        touch.on(el, 'touchstart', search)
    }

    let downloadbtn = document.querySelector('.downloadbtn');
    touch.on(downloadbtn, 'touchstart', function () {
        alert('APP尚在开发中 | 0 _ 0 |');
    })
})