function createImage() {
    const images = document.querySelectorAll('.show');
    console.log(images[0]);
    images.forEach((image) => {
        image.addEventListener('click', function () {
            lightbox.classList.add('active');
            const img = document.createElement('img');
            img.src = image.src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });
}

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

createImage();

lightbox.addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
});

/* // Functions

function displayLightbox(src) {
    document.getElementById('main-wrapper').setAttribute('aria-hidden', 'true');
    document.getElementById('photo_modal').setAttribute('aria-hidden', 'false');
    const lightbox = document.getElementById('photo_modal');
    lightbox.style.display = 'flex';
    //document.querySelector('.modal_div').focus();
    console.log(src);
    const img = document.getElementById('image');
    //img.setAttribute('src', src);
    img.setAttribute('alt', `Photo`);
    img.style.objectFit = 'cover';
}

function closeLightbox() {
    document
        .getElementById('main-wrapper')
        .setAttribute('aria-hidden', 'false');
    document.getElementById('photo_modal').setAttribute('aria-hidden', 'true');
    const lightbox = document.getElementById('photo_modal');
    lightbox.style.display = 'none';
    document.querySelector('.modal-close-btn').focus();
}

const modalLightbox = document.getElementById('photo_modal');

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        document
            .getElementById('main-wrapper')
            .setAttribute('aria-hidden', 'false');
        document
            .getElementById('photo_modal')
            .setAttribute('aria-hidden', 'true');
        modalLightbox.style.display = 'none';
        document.querySelector('.modal-close-btn').focus();
    }
});
 */
