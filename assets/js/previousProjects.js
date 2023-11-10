var previousProjectBtn = document.querySelector('.previousProject');
var projectBlock = document.querySelector('#projects');
var menu = document.querySelector('.menu');
previousProjectBtn.onclick = function(){
    projectBlock.style.transform = 'translateY(150%)'
    menu.style.transform = 'translateX(0%)'
}
