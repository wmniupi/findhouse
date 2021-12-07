<<<<<<< HEAD

    function setRem() {
        var ui_w = 375;
        var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
        var html_ = document.getElementsByTagName('html')[0];
        html_.style.fontSize = (clientWidth / ui_w) * 10 + 'px';
    }
    window.onresize = setRem;
=======
function setRem() {
    var ui_w = 375;
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var html_ = document.getElementsByTagName('html')[0];
    html_.style.fontSize = (clientWidth / ui_w) * 10 + 'px';
}
window.onresize = setRem;
>>>>>>> 9ca421af93015607ffecbc6fe4645fd9b2bc2ca0
