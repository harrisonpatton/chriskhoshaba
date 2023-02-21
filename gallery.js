'use strict';
(function () {
  const thumbnails = document.querySelectorAll('.gallery__img'), //target thumbnail images,
    imageMain = document.querySelector('.image-main'), //target main image
    captionElement = document.querySelector('.caption'); //target caption element
  const leftArrow = document.querySelector('.material-icons.left-btn'),
    rightArrow = document.querySelector('.material-icons.right-btn');
  let currentIndex = 0;

  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function (evt) {
      imageMain.src = evt.target.src.replace('150/100', '1000/400'); //Replaces the smaller image size with a larger size
      currentIndex = evt.target.id.substr(6, evt.target.id.length) - 1; //Updates current index by getting the substring of the ID attribute of the gallery__img, starting at the 6th character (which is the number) and ending at the end of the string. We then subtract 1 from this so that is can be zero based, otherwise the JS will display the image that is one number higher, since arrays start at 0.
      let caption = evt.target.dataset.caption;
      //Update the caption element
      captionElement.textContent = evt.target.dataset.caption;
      imageMain.alt = caption;
      imageMain.title = caption;
    });
  }
  leftArrow.addEventListener('click', function (evt) {
    if (currentIndex > 0) {
      currentIndex--;
      imageMain.src = thumbnails[currentIndex].src.replace(
        '150/100',
        '1000/400'
      );
      // Retrieve the caption for the current thumbnail and update the imageMain caption accordingly
      const caption = thumbnails[currentIndex].dataset.caption;
      imageMain.alt = caption;
      imageMain.title = caption;
    }
  });

  rightArrow.addEventListener('click', function (evt) {
    if (currentIndex < thumbnails.length - 1) {
      currentIndex++;
      imageMain.src = thumbnails[currentIndex].src.replace(
        '150/100',
        '1000/400'
      );
      // Retrieve the caption for the current thumbnail and update the imageMain caption accordingly
      const caption = thumbnails[currentIndex].dataset.caption;
      imageMain.alt = caption;
      imageMain.title = caption;
    }
  });
})();
