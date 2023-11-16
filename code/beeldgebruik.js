var menuKnop = document.querySelector('#menuKnop');
var menu = document.getElementById('menu');

menuKnop.addEventListener('click', function () {
  var currentMaxWidth = menu.style.maxWidth;

  if (currentMaxWidth === '7.5rem') {
    menu.style.maxWidth = '2.75rem';
  } else {
    menu.style.maxWidth = '7.5rem';
  }
});
