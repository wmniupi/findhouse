window.addEventListener('load',function(){
    var fast = document.getElementsByClassName('fast')[0];
    var common = document.getElementsByClassName('common')[0];
    var aside = document.getElementsByTagName('aside')[0];
    var spans = aside.getElementsByTagName('span');
    var authcode = document.getElementsByClassName('authcode')[0];
    spans[1].addEventListener('touchstart',function(){
        this.className='borbot';
        spans[0].className='';
        common.style.display='none';
        fast.style.display='block'
    })
     spans[0].addEventListener('touchstart',function(){
        this.className='borbot';
        spans[1].className='';
        common.style.display='block';
        fast.style.display='none'
    })
    var phonenum=document.getElementById('phonenum');
    var paw = document.getElementById('paw');
    var sub = this.document.getElementById('sub');
    var phonenum2=document.getElementById('phonenum2');
    var paw2 = document.getElementById('paw2');
    var sub2 = this.document.getElementById('sub2');
     // 密码的正则
    var pawstr= /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[._~!@#$^&*])[A-Za-z0-9._~!@#$^&*]{8,20}$/;
    // 手机号的正则
	var reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;    //11位手机号码正则
    var a1 = false;
    var a2= false;
    var a3= false;
    var a4 = false;
    // 手机号验证
    //  authcode.disabled='true';
	phonenum.onblur=function(){
		 if (!reg_tel.test(phonenum.value )) {
            phonenum.value ='';
			phonenum.placeholder='手机号输错了!!!';
            phonenum.style.boxShadow='0 0 8px rgb(255,138,0) inset'
            a1=false;
		}else{
            phonenum.style.boxShadow='0 0 8px green inset'
            a1=true;

            //  if(a1){
            //         authcode.disabled='';
            //     }
        }
    }
    // 短信验证码
    var timer;
    authcode.addEventListener('click',function(){
        let num = 60;
        alert('czjnp')
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
    // 密码验证
     paw.onblur=function(){
        if(!pawstr.test(paw.value )){
            paw.value='';
            paw.placeholder='密码必须由字母、数字、特殊符号组成,长度为8-20位!!!'
            paw.style.boxShadow='0 0 8px rgb(255,138,0) inset'
             a2=false;
        }else{
            paw.style.boxShadow='0 0 8px green inset'
            a2=true;
        }
    }
    // 提交判断
    sub.onclick=function(){
        if(a1 && a2){
            alert('登录成功')
             window.location='./usermine.html';
            localStorage.setItem('phone_value',phonenum.value);
             phonenum.value='';
             paw.value='';
        }else{
            alert('页面输入有误,请重新输入')
        }
    }
    // 手机号验证
    phonenum2.onblur=function(){
		 if (!reg_tel.test(phonenum2.value )) {
            phonenum2.value ='';
			phonenum2.placeholder='手机号输错了!!!';
            phonenum2.style.boxShadow='0 0 8px rgb(255,138,0) inset'
            a3=false;
		}else{
            phonenum2.style.boxShadow='0 0 8px green inset'
            a3=true;
        }
    }
    // 密码
     paw2.onblur=function(){
        if(paw2.value!='czjnp'){
            paw2.value='';
            paw2.placeholder='验证码有误'
            paw2.style.boxShadow='0 0 8px rgb(255,138,0) inset'
             a4=false;
        }else{
            paw2.style.boxShadow='0 0 8px green inset'
            a4=true;
        }
    }
    sub2.onclick=function(){
        if(a4 && a3){
            alert('登录成功')
             localStorage.setItem('phone_value',phonenum.value);
             window.location='./usermine.html';
            phonenum2.value='';
             paw2.value='';
        }else{
            alert('页面输入有误,请重新输入')
        }
    }
})