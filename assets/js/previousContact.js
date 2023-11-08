var previousContactBtn = document.querySelector('.previousContact');
var contactBlock = document.querySelector('#contact');
var menu = document.querySelector('.menu');
previousContactBtn.onclick = function(){
    contactBlock.style.transform = 'translateY(150%) skew(150deg)'
    menu.style.transform = 'translateX(0%)'
}
