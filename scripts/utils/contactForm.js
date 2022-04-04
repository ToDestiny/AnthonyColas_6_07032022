function displayModal() {
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'none';
}

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
