'use strict';
var carousel = document.querySelector('.carousel');
var items = document.querySelectorAll('.carousel .item');
var previous = document.querySelector('.carousel-controls .previous');
var next = document.querySelector('.carousel-controls .next');
var current = 0;
for (var i = 1; i < items.length; i++) {
  items[0].style.opacity = 1;
  items[i].style.position = 'absolute';
  items[0].style.position = 'absolute';
}
previous.addEventListener('click', previousItem);
next.addEventListener('click', nextItem);
function previousItem(event) {
  event.preventDefault();
  var nextIndex = (current == 0)? items.length - 1 : current-1;
  changeSlideByIndex(nextIndex);
}
function hideAllSlides(){
  for(var i = 0; i < items.length; i++)
    items[i].style.opacity = 0;
}
function changeSlideByIndex(index){
  hideAllSlides();
  current = index;
  items[index].style.opacity = 1;
}
function nextItem(event) {
  event.preventDefault();
  var nextIndex = (current == items.length - 1)? 0 : current+1;
  changeSlideByIndex(nextIndex);
}