
let largeImage = document.querySelector('#large-image');

 function handleClick (e) {
  const anchor = e.target.closest('.images-anchor');
  if (anchor) {
    const url = anchor.href;
    largeImage.src = url;
    e.preventDefault();
    console.log("man");
   }
 }

document.addEventListener('click', handleClick)





