
let images = document.querySelectorAll('.slideshow img');
let currentImageIndex = 0;
images[currentImageIndex].classList.add('active');

function showImage(index) {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (index + images.length) % images.length;
    images[currentImageIndex].classList.add('active');
}

function showNextImage() {
    showImage(currentImageIndex + 1);
}

function showPreviousImage() {
    showImage(currentImageIndex - 1);
}

document.getElementById('prev_btn').addEventListener('click', showPreviousImage);
document.getElementById('next_btn').addEventListener('click', showNextImage);

setInterval(showNextImage, 3000);

