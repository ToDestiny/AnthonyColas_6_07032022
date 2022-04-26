// eslint-disable-next-line no-unused-vars
function closePicture() {
    document
        .getElementById('main-wrapper')
        .setAttribute('aria-hidden', 'false');
    document.getElementById('lightbox').setAttribute('aria-hidden', 'true');
    const modal = document.getElementById('lightbox');
    modal.style.display = 'none';
    document
        .getElementById('video-lightbox')
        .setAttribute('aria-hidden', 'true');
    const videoModal = document.getElementById('video-lightbox');
    videoModal.style.display = 'none';
    document.querySelector('.modal-close-btn').focus();
}
