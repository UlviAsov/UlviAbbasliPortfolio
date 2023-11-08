var aboutBtn = document.querySelector('.aboutBtn');
var aboutBlock = document.querySelector('#about');
var menu = document.querySelector('.menu');
aboutBtn.onclick = function(){
    aboutBlock.style.transform = 'translateY(0%)'
    menu.style.transform = 'translateX(150%)'
};
