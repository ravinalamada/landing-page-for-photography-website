const images = document.querySelectorAll('img');

images.forEach(image => {
  image.addEventListener('click', e => {
    console.log(e.target);
    image.classList.add('open');
  });
});