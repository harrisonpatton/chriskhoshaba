'use strict';

//Photo Gallery
(function () {
  const thumbnails = document.querySelectorAll('.gallery__img'), //target thumbnail images,
    imageMain = document.querySelector('.image-main'), //target main image
    captionElement = document.querySelector('.caption'); //target caption element
  const leftArrow = document.querySelector('.material-icons.left-btn'),
    rightArrow = document.querySelector('.material-icons.right-btn');
  let currentIndex = 0;

  // function to update the main image and caption
  function updateMainImage(index) {
    imageMain.src = thumbnails[index].src.replace('150/100', '1000/400'); //Replaces large image with whichever thumbnail was clicked
    captionElement.textContent = thumbnails[index].dataset.caption;
    imageMain.alt = thumbnails[index].dataset.caption;
    imageMain.title = thumbnails[index].dataset.caption;
  }

  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function (evt) {
      currentIndex = evt.target.id.substr(6, evt.target.id.length) - 1; //Updates current index by getting the substring of the ID attribute of the gallery__img that was clicked on, starting at the 6th character (which is the number) and ending at the end of the string. We then subtract 1 from this so that is can be zero based, otherwise the JS will display the image that is one number higher, since arrays start at 0.
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

//Headshot Gallery
(function () {
  const headshotThumbnails = document.querySelectorAll('.headshot__img'), //target thumbnail images,
    headshotMain = document.querySelector('.headshot-main'); //target main image
  const headshotLeftArrow = document.querySelector('.headshot-arrow__left'),
    headshotRightArrow = document.querySelector('.headshot-arrow__right');
  let headshotCurrentIndex = 0;

  // function to update the main image and caption
  function updateMainHeadshot(index) {
    headshotMain.src = headshotThumbnails[index].src.replace(
      '150/100',
      '1000/400'
    ); //Replaces large image with whichever thumbnail was clicked
    captionElement.textContent = headshotThumbnails[index].dataset.caption;
    headshotMain.alt = headshotThumbnails[index].dataset.caption;
    headshotMain.title = headshotThumbnails[index].dataset.caption;
  }

  for (let i = 0; i < headshotThumbnails.length; i++) {
    headshotThumbnails[i].addEventListener('click', function (evt) {
      headshotCurrentIndex = evt.target.id.substr(9, evt.target.id.length) - 1; //Updates current index by getting the substring of the ID attribute of the headshot__img that was clicked on, starting at the 9th character (which is the number) and ending at the end of the string. We then subtract 1 from this so that is can be zero based, otherwise the JS will display the image that is one number higher, since arrays start at 0.
      updateMainHeadshot(headshotCurrentIndex);
    });
  }

  headshotLeftArrow.addEventListener('click', function (evt) {
    if (headshotCurrentIndex > 0) {
      headshotCurrentIndex--;
      updateMainHeadshot(headshotCurrentIndex);
    }
  });

  headshotRightArrow.addEventListener('click', function (evt) {
    if (headshotCurrentIndex < headshotThumbnails.length - 1) {
      headshotCurrentIndex++;
      updateMainHeadshot(headshotCurrentIndex);
    }
  });

  // add keydown event listener to window
  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'ArrowLeft' && headshotCurrentIndex > 0) {
      headshotCurrentIndex--;
      updateMainHeadshot(headshotCurrentIndex);
    } else if (
      evt.key === 'ArrowRight' &&
      headshotCurrentIndex < headshotThumbnails.length - 1
    ) {
      headshotCurrentIndex++;
      updateMainHeadshot(headshotCurrentIndex);
    }
  });

  // initialize the main image and caption
  updateMainHeadshot(headshotCurrentIndex);
})();
