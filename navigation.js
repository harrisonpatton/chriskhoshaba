var sandwichButton = document.querySelector('.sandwich-button');
var dropdown = document.querySelector('.dropdown-menu');

sandwichButton.addEventListener('click', function () {
  dropdown.classList.toggle('active');
});
