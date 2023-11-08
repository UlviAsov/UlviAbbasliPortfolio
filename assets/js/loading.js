function Loader(){
    var loadingBlock = document.querySelector('#loading');

setTimeout(function(){
    loadingBlock.style.display = 'none'
}, 3000)
}

Loader();