window.addEventListener('load', function () {
    let leftbutton = document.querySelector('.leftarrow');
    let rightbutton = document.querySelector('.rightarrow');
    var ul = document.querySelector('.scrollimg_thing');
    let current_num = document.querySelector('.current_num');
    var firstli = ul.children[0].cloneNode(true);
    ul.appendChild(firstli);
    var containerwidth = window.innerWidth;
    /* 节流阀标志 flag用以控制动画效果是否开始 初始为true*/
    var flag = true;
    let count = 0;
    let imgnum = 1;

    /* 右箭头点加事件 */
    rightbutton.addEventListener('click', function () {
        if (flag) {
            /* 关闭阀门 */
            flag = false;
            imgnum++;
            if (imgnum == 6) {
                imgnum = 1;
            }
            current_num.innerHTML = imgnum;
            /* 判断是否为最后一张图，若为最后一张图迅速移动到第一张图并清零count值 */
            if (count == ul.children.length - 1) {
                ul.style.left = 0;
                count = 0;
            }
            /* 进行动画效果 */
            count++;
            animate(ul, -count * containerwidth, function () {
                /* 利用回调函数开启阀门继续下一个动画效果 */
                flag = true;
            });
        }
    })
    leftbutton.addEventListener('click', function () {
        if (flag) {
            /* 关闭阀门 */
            flag = false;
            /* 判断是否为第一张图，若为第一张图迅速移动到最后一张图
            （第一张图的克隆）并修改count的值为数组长度 -1 （索引值 = 长度-1） */
            if (count == 0) {
                count = ul.children.length - 1;
                ul.style.left = - count * containerwidth + 'px';
            }
            /* 进行动画效果 */
            count--;
            animate(ul, -count * containerwidth, function () {
                /* 利用回调函数开启阀门继续下一个动画效果 */
                flag = true;
            });
        }
    })

    ul.addEventListener('mouseenter', function () {
        leftbutton.style.display = 'block';
        rightbutton.style.display = 'block';
    })
    let scroll_sec = document.querySelector('.scroll_sec');
    scroll_sec.addEventListener('mouseleave', function () {
        leftbutton.style.display = 'none';
        rightbutton.style.display = 'none';
    })
    var timer = setInterval(() => {
        rightbutton.click();
    }, 3000);
})