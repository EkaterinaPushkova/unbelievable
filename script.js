//function for slideshow by click
//===============================
let image = document.getElementById('image');
let imgs = new Array(
    '/images/w1.jpg', 
    '/images/w2.jpg', 
    '/images/w3.jpg', 
    '/images/w4.jpg', 
    '/images/w5.jpg', 
    '/images/w6.jpg', 
    '/images/w7.jpg', 
    '/images/w8.jpg', 
    '/images/w9.jpg', 
    '/images/w10.jpg');
image.src = imgs[0];
let i = 1;
function changeImgs(){
    image.src = imgs[i];
    console.log(i);
    i++;
    console.log(imgs.length);
    if (i === imgs.length){
        i = 0;
    }
}
