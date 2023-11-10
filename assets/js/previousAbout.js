var preBtn = document.querySelector('.previous');
var aboutBlock = document.querySelector('#about');
var contactBlock = document.querySelector('#contact');
var menu = document.querySelector('.menu');
preBtn.onclick = function(){
    aboutBlock.style.transform = 'translateY(150%)';
    menu.style.transform = 'translateX(0%)';
}

