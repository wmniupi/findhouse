window.addEventListener("load", function () {

    let header = document.querySelector('header');
    let headericons = header.querySelectorAll('img');
    touch.on(headericons[0], 'touchstart', function () {
        window.location.href = './index.html';
    })
    touch.on(headericons[1], 'touchstart', function () {
        if (window.localStorage.getItem('phone_value')) {
            window.location.href = './usermine.html';
        } else {
            window.location.href = './user.html';
        }

    })
    touch.on(headericons[2], 'touchstart', function () {
        alert('APP尚在研发 | 0 _ 0 |')
    })

})