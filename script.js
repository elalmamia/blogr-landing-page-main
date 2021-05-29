// ====desktop list actions====
const list = document.querySelectorAll('.list-top');
const hamburger = document.querySelector('.hamburger'),
      nav = document.querySelector('.nav-desktop'),
      open = document.querySelector('.open'),
      close = document.querySelector('.close'),
      menu = document.querySelector('.menu');
      


list.forEach(item=>item.firstElementChild.addEventListener('click', function(){
    item.classList.toggle('rotate');
    list.forEach(listItem=>{
        if(listItem!==item){
            listItem.classList.remove('visible');
        } 
    })
    item.classList.toggle('visible')
    
    
}))
window.onclick= function(e){
    list.forEach(item=>{
        if(e.target!==item.firstElementChild){
        item.classList.remove('visible'); 
        item.classList.remove('rotate');
        }
    })  
   
}

// ====mobile list actions====

hamburger.addEventListener('click', function(){
    menu.classList.toggle('visible');
    nav.classList.toggle('nav-mobile');
    if(menu.classList.contains('visible')){
        open.style.display='block';
        close.style.display='none';
    } else {
        open.style.display='none';
        close.style.display='block';
    }
})



