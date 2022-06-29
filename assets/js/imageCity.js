const ImageWebWorker = new Worker("js/imgWorker.js"); 
const imgElements = document.querySelectorAll('img[data-src]');

imgElements.forEach(imageElement => { 
    const imgURL = imageElement.getAttribute('data-src'); 
    ImageWebWorker.postMessage(imgURL); 
}); 

ImageWebWorker.addEventListener('message', event => { 
    const imageData = event.data; 
    const imgElement = document.querySelectorAll('img[data-src=\'' + imageData.imgURL + '\']'); 
    const objectURL = URL.createObjectURL(imageData.blob); 
    imgElement[0].setAttribute('src', objectURL); 
    imgElement[0].removeAttribute('data-src'); 
});

