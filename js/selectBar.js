window.onload = function () { 
    let list = document.getElementById('head').contentWindow.document.querySelectorAll('#ul li a');
    console.log(list);
    console.log(window.location.pathname);
    urlList = ['/index.html','/photography.html','/shop.html','/c.html','/profile.html'];
    for(let i=0;i<urlList.length;i++){
        if(window.location.pathname == urlList[i]){
            list[0].classList.remove('show');
            list[i].style.color = '#15b8d7';
        }
    }
 }
