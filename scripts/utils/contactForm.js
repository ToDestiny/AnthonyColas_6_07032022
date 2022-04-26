// Functions
// eslint-disable-next-line no-unused-vars
function displayModal() {
    document.getElementById('main-wrapper').setAttribute('aria-hidden', 'true');
    document
        .getElementById('contact_modal')
        .setAttribute('aria-hidden', 'false');
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'block';
    document.querySelector('.contact_button').focus();
}

// eslint-disable-next-line no-unused-vars
function closeModal() {
    document
        .getElementById('main-wrapper')
        .setAttribute('aria-hidden', 'false');
    document
        .getElementById('contact_modal')
        .setAttribute('aria-hidden', 'true');
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'none';
    document.querySelector('.modal-close-btn').focus();
}

// eslint-disable-next-line no-unused-vars
function submitInfo() {
    // Get the form
    let form = document.querySelector('#post');

    // Get all field data from the form
    // returns a FormData object
    let data = new FormData(form);
    for (let entry of data) {
        console.log(entry);
    }
}

const modal = document.getElementById('contact_modal');

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        document
            .getElementById('main-wrapper')
            .setAttribute('aria-hidden', 'false');
        document
            .getElementById('contact_modal')
            .setAttribute('aria-hidden', 'true');
        modal.style.display = 'none';
        document.querySelector('.modal-close-btn').focus();
    }
});
