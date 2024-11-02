document.addEventListener('scroll',function(){
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(currentScrollTop)
    var ul=document.getElementById('listas')

    if(currentScrollTop>33){
        ul.style.height="0"
        ul.style.transition="height 0.9s ease"
    }
    else{
        ul.style.height="50%"
        ul.style.transition="height 0.9s ease" 
    }
})