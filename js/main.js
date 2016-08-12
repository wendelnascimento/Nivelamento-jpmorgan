window.addEventListener('scroll', showTopButton);
var button = document.querySelector('.scroll-top');


function showTopButton() {
  if(window.scrollY > 55) {
    button.style.display = 'block';
  }
  else {
    button.style.display = 'none';
  }
}
