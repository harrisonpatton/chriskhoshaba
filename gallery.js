'use strict';
(function () {
  const thumbnails = document.querySelectorAll('.gallery__img'), //target thumbnail images,
    imageMain = document.querySelector('.image-main'), //target main image
    captionElement = document.querySelector('.caption'); //target caption element
  const leftArrow = document.querySelector('.material-icons.left-btn'),
    rightArrow = document.querySelector('.material-icons.right-btn');
  let currentIndex = 0;

  // function to update the main image and caption
  function updateMainImage(index) {
    imageMain.src = thumbnails[index].src.replace('150/100', '1000/400');
    captionElement.textContent = thumbnails[index].dataset.caption;
    imageMain.alt = thumbnails[index].dataset.caption;
    imageMain.title = thumbnails[index].dataset.caption;
  }

  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function (evt) {
      currentIndex = evt.target.id.substr(6, evt.target.id.length) - 1; //Updates current index by getting the substring of the ID attribute of the gallery__img, starting at the 6th character (which is the number) and ending at the end of the string. We then subtract 1 from this so that is can be zero based, otherwise the JS will display the image that is one number higher, since arrays start at 0.
      updateMainImage(currentIndex);
    });
  }

  leftArrow.addEventListener('click', function (evt) {
    if (currentIndex > 0) {
      currentIndex--;
      updateMainImage(currentIndex);
    }
  });

  rightArrow.addEventListener('click', function (evt) {
    if (currentIndex < thumbnails.length - 1) {
      currentIndex++;
      updateMainImage(currentIndex);
    }
  });

  // add keydown event listener to window
  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'ArrowLeft' && currentIndex > 0) {
      currentIndex--;
      updateMainImage(currentIndex);
    } else if (
      evt.key === 'ArrowRight' &&
      currentIndex < thumbnails.length - 1
    ) {
      currentIndex++;
      updateMainImage(currentIndex);
    }
  });

  // initialize the main image and caption
  updateMainImage(currentIndex);
})();
