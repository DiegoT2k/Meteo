self.addEventListener('message', async event => { 
    const imgURL = event.data; 
 
    const response = await fetch(imgURL); 
    const blob = await response.blob(); 
 
    self.postMessage({ 
        imgURL: imgURL, 
        blob: blob 
    }); 
});