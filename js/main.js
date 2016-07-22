window.addEventListener('scroll', showTopButton);
var button = document.querySelector('.scroll-top');


function showTopButton() {
  if(document.body.scrollTop > 55) {
    button.style.display = 'block';
  }
  else {
    button.style.display = 'none';
  }
}
