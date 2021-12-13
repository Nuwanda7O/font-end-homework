window.onload = function(){
    let sideBar = document.getElementsByClassName('bar');
    console.log(sideBar);
    let contentList = document.getElementsByClassName('content');
    console.log(contentList);
    sideBar[sideBar.length-1].classList.add('selectedBar');
    for(let i=1;i<sideBar.length;i++){
        // sideBar[i].classList.add('displayNone');
    }
    
    for(let i=0;i<sideBar.length;i++){
        sideBar[i].onmouseover = function(){
            for(let j=0;j<sideBar.length;j++){
                sideBar[j].classList.remove('selectedBar');
                contentList[j].classList.add('displayNone');
                console.log(contentList[j]);
            }
            this.classList.add('selectedBar');
            contentList[i].classList.remove('displayNone');
            contentList[i].classList.add('display');
            console.log(contentList[i]);
        }
    }
}