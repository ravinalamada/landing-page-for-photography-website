
function Gallery(gallery) {
  if(!gallery) {
    throw Error('No image found!!!');
  }

  // Select the element we need
  const images = Array.from(gallery.querySelectorAll('img'));
  const wrapper = document.querySelector('.photograf__img--large--wrapper');
  let currentImage;

  function showImage(el) {
  if(!el) {
    console.info("no image to show");
    return;
  }

    // upadate this div with this info
    wrapper.querySelector('img').src = el.src;
    currentImage = el;
  }

  images.forEach(image => {
    image.addEventListener('click', e => showImage(e.currentTarget));
  });

}

const gallery1 = Gallery(document.querySelector('.slider'));






