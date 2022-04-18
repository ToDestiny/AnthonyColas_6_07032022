function closePicture() {
    document
        .getElementById('main-wrapper')
        .setAttribute('aria-hidden', 'false');
    document.getElementById('lightbox').setAttribute('aria-hidden', 'true');
    const modal = document.getElementById('lightbox');
    modal.style.display = 'none';
    document.querySelector('.modal-close-btn').focus();
}

function leftPicture() {
    const lightbox = document.getElementById('lightbox');
    let method = lightbox.getAttribute('data-index');
    console.log(method);
    if (method >= 1) {
        method--;
        lightbox.setAttribute('data-index', method);
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('myparam');
        const image = document.getElementById('lightboxImg');
        const picture = `assets/media/${id}/${path}`;
        image.src = picture;
    }
}
