'use strict';

var carousel = document.querySelector('.carousel');
var textCarousel = document.querySelector('.carousel-text');

var items = document.querySelectorAll('.carousel .item');
var textItems = document.querySelectorAll('.carousel-text .item');

var previous = document.querySelector('.carousel-controls .previous');
var next = document.querySelector('.carousel-controls .next');

var current = 0;

for (var i = 1; i < items.length; i++) {
  items[0].style.opacity = 1;
  textItems[0].style.opacity = 1;

  items[i].style.top = 0;

  items[i].style.position = 'absolute';
  textItems[i].style.position = 'absolute';

  items[i].style.top = items[0].offsetTop + 'px';
  textItems[i].style.top = textItems[0].offsetTop + 'px';
}

previous.addEventListener('click', previousItem);
next.addEventListener('click', nextItem);

function previousItem(event) {
  event.preventDefault();
  if(current == 0) {
    items[current].style.opacity = 0;
    textItems[current].style.opacity = 0;

    items[items.length - 1].style.opacity = 1;
    textItems[textItems.length - 1].style.opacity = 1;

    current = items.length - 1;
    carousel.style.width = items[current].offsetWidth + 'px';
  }
  else {
    items[current].style.opacity = 0;
    textItems[current].style.opacity = 0;

    items[current - 1].style.opacity = 1;
    textItems[current - 1].style.opacity = 1;

    current = current - 1;
    carousel.style.width = items[current].offsetWidth + 'px';
  }
}

function nextItem(event) {
  event.preventDefault();
  if(current == items.length - 1) {
    items[current].style.opacity = 0;
    textItems[current].style.opacity = 0;

    items[0].style.opacity = 1;
    textItems[0].style.opacity = 1;

    current = 0;
    carousel.style.width = items[current].offsetWidth + 'px';
  }
  else {
    items[current].style.opacity = 0;
    textItems[current].style.opacity = 0;

    items[current + 1].style.opacity = 1;
    textItems[current + 1].style.opacity = 1;

    current = current + 1;
    carousel.style.width = items[current].offsetWidth + 'px';
  }
}
