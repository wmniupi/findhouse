window.addEventListener('load', function () {
    let attentionbtn = document.querySelector('.attentionbtn');
    let friendlink = document.querySelector('.friendlink');
    let attention_content = document.querySelector('.attention_content');
    let friendlink_content = document.querySelector('.friendlink_content');
    let app_download = document.querySelector('.app_download');
    let closebtn = document.querySelector(".closebtn");
    touch.on(attentionbtn, 'tap', function () {
        friendlink.style.borderBottom = '1px solid rgb(255,138,0)';
        this.style.borderBottom = '2px solid rgb(255,138,0)';
        friendlink_content.style.display = 'none';
        attention_content.style.display = 'flex';

    });
    touch.on(friendlink, 'tap', function () {
        attentionbtn.style.borderBottom = '1px solid rgb(255,138,0)';
        this.style.borderBottom = '2px solid rgb(255,138,0)';
        attention_content.style.display = 'none';
        friendlink_content.style.display = 'flex';
    });
    touch.on(closebtn, 'tap', function () {
        app_download.style.display = 'none'
    });
})