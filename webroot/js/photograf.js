
let largeImage = document.querySelector('#large-image');
const activeImage = document.querySelector('.active')
const allImages = document.querySelectorAll('.images-anchor');
allImages.forEach(image => image.style.opacity = 0.5);
activeImage.style.opacity = 1;

 function handleClick (e) {
  const parentEl = e.currentTarget;
  const anchor = e.target;
  if (anchor) {
    const url = anchor.src;
    largeImage.src = url;
    activeImage.style.opacity = '0.5'
    allImages.forEach(image => image.style.opacity = 0.5)
    parentEl.style.opacity = 1;
   }
 }

allImages.forEach(image => image.addEventListener('click', handleClick))





