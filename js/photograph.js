const images = document.querySelectorAll('img');

images.forEach(image => {
  image.addEventListener('click', e => {
    console.log(e.target);
    image.classList.add('open');
  });
});

const closeModal = (e) => {
  if(e.target === 'escape') {
    console.log('cool');
    images.classList.remove('open');
  }
}

window.addEventListener('click', closeModal());

