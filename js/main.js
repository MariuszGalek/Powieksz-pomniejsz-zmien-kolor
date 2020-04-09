const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const colorChange = document.querySelector('.color');
const text = document.querySelector('p');
let size = window.getComputedStyle(text).getPropertyValue('font-size');currentSize = parseFloat(size);

sizeUp.addEventListener('click', function(){
    text.style.fontSize = (currentSize += 5) + "px";
});

sizeDown.addEventListener('click', function(){

});

colorChange.addEventListener('click', function(){

});