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

  items[i].style.top = 0;
  items[0].style.top = 0;
}

previous.addEventListener('click', previousItem);
next.addEventListener('click', nextItem);

function previousItem(event) {
  event.preventDefault();
  if(current == 0) {
    items[current].style.opacity = 0;

    items[items.length - 1].style.opacity = 1;

    current = items.length - 1;
  }
  else {
    items[current].style.opacity = 0;

    items[current - 1].style.opacity = 1;

    current = current - 1;
  }
}

function nextItem(event) {
  event.preventDefault();
  if(current == items.length - 1) {
    items[current].style.opacity = 0;

    items[0].style.opacity = 1;

    current = 0;
  }
  else {
    items[current].style.opacity = 0;

    items[current + 1].style.opacity = 1;

    current = current + 1;
  }
}
