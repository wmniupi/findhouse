window.addEventListener('load',function(){
    // 获取发送验证码
    var authcode = document.getElementsByClassName('authcode')[0];
    var yanzheng ='czjnp'
    var timer;
    authcode.addEventListener('click',function(){
        let num = 60;
    
        alert(yanzheng)
        authcode.disabled='true';
        clearInterval(timer)
        timer=setInterval(() => {
            num--;
            authcode.innerHTML=' ('+num+'秒) 重发'
            if(num==0){
                 clearInterval(timer)
                authcode.innerHTML='再来一次'
                authcode.disabled='';
            }
        }, 1000);
    })
    // 提交按钮
    var sub = document.getElementById('sub');
    // 电话号码
    var phonenum = document.getElementById('phonenum');
    // 验证码
    var code = document.getElementById('code');
    // 密码框
    var paw=document.getElementById('paw');
    // 新密码
    var n_paw=document.getElementById('n_paw');
    // 密码的正则
    var pawstr= /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[._~!@#$^&*])[A-Za-z0-9._~!@#$^&*]{8,20}$/;
    // 手机号的正则
	var reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;    //11位手机号码正则
    var a1 = false;
    var a2= false;
    var a3= false;
    var a4= false;
	phonenum.onblur=function(){
		 if (!reg_tel.test(phonenum.value )) {
            phonenum.value ='';
			phonenum.placeholder='手机号输错了!!!';
            a1=false;
            phonenum.style.boxShadow='0 0 8px rgb(255,138,0) inset'
            
		}else{
            phonenum.style.boxShadow='0 0 8px green inset'
            a1=true;
        }
    }
    code.onblur=function(){
        if(code.value!=yanzheng){
            code.value='';
            code.placeholder='验证码错误!!!'
            code.style.boxShadow='0 0 8px rgb(255,138,0) inset'
             a2=false;
        }else{
            code.style.boxShadow='0 0 8px green inset'
            a2=true;
        }
    }
     paw.onblur=function(){
        if(!pawstr.test(paw.value )){
            paw.value='';
            paw.placeholder='密码必须由字母、数字、特殊符号组成,长度为8-20位!!!'
             paw.style.boxShadow='0 0 8px rgb(255,138,0)inset'
             a3=false;
        }else{
            paw.style.boxShadow='0 0 8px green inset'
            a3=true;
        }
    }
    n_paw.onblur=function(){
        if(n_paw.value!=paw.value){
            n_paw.value='';
            n_paw.placeholder='两次输入密码不同';
            n_paw.style.boxShadow='0 0 8px rgb(255,138,0) inset'
            a4=false;
        }else if(n_paw.value==''){
            n_paw.style.boxShadow='0 0 8px rgb(255,138,0) inset'
             n_paw.placeholder='密码不能为空!!!';
            a4=false;
        }
        else{
            n_paw.style.boxShadow='0 0 8px green inset'
            a4=true;
        }
    }
    sub.onclick=function(){
        if(a1 && a2 && a3 && a4){
            alert('重置密码成功')
            window.location='./usermine.html';
            localStorage.setItem('phone_value',phonenum.value);
             phonenum.value='';
             code.value='';
             paw.value='';
             n_paw.value='';
              // 存储网页值
        }else{
            alert('页面输入有误,请重新输入')
        }
    }
})