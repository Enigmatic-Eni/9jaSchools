let links = document.querySelector('.links');
let toggle = document.querySelector('.button');

toggle.addEventListener('click', function(){
    links.classList.toggle('show-links');
});