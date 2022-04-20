import { mediaFactory } from '../factories/mediaFactory.mjs';

async function getData() {
    const data = fetch('../data/PhotographersApi.json')
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error('ERROR FETCH');
            }
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log(error);
        });
    return data;
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('myparam');

function displayFormName(photographer) {
    document.getElementById('form_name').innerHTML = `${photographer.name}`;
}

function displayMedia(photos) {
    const photoSection = document.querySelector('.photo_section');

    photos.forEach((media, i) => {
        const photographerPhoto = mediaFactory(media, i);
        const userCardDOM = photographerPhoto.getUserCardDOM();
        photoSection.appendChild(userCardDOM);
    });
}

function displayInfo(photographer) {
    document.getElementById(
        'photographer_name'
    ).innerHTML = `${photographer.name}`;
    document.getElementById('photographer_name').style.color = '#D3573C';
    document.getElementById('photographer_name').style.fontSize = '54px';
    document.getElementById('photographer_name').style.margin = '0';

    document.getElementById(
        'photographer_city'
    ).innerHTML = `${photographer.city}, ${photographer.country}`;
    document.getElementById('photographer_city').style.color = '#901C1C';
    document.getElementById('photographer_city').style.fontSize = '24px';

    document.getElementById(
        'photographer_tagline'
    ).innerHTML = `${photographer.tagline}`;
    document.getElementById('photographer_city').style.color = '#525252';
    document.getElementById('photographer_city').style.fontSize = '18px';
    document
        .getElementById('photographer_img')
        .setAttribute('src', `assets/photographers/${photographer.portrait}`);
    document.getElementById('photographer_img').style.objectFit = 'cover';
}

function displayFooter(photographer) {
    document.getElementById(
        'footer'
    ).innerHTML = `plop ${photographer.likes} ${photographer.price}€/jour`;
    /*     media.forEach((media) => {
        console.log('test');
    }); */
}

async function init() {
    // Récupère les datas des photographes
    const data = await getData();

    const photos = data.media.filter(function (elt) {
        return elt.photographerId == id;
    });
    const photographer = data.photographers.filter(function (elt) {
        return elt.id == id;
    });
    console.log(photographer[0]);
    displayInfo(photographer[0]);
    displayFooter(photographer[0]);
    displayMedia(photos);
    displayFormName(photographer[0]);
    return data;
}

// Escape key press during modal

const modal = document.getElementById('lightbox');

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        document
            .getElementById('main-wrapper')
            .setAttribute('aria-hidden', 'false');
        document.getElementById('lightbox').setAttribute('aria-hidden', 'true');
        modal.style.display = 'none';
        document.querySelector('.modal-close-btn').focus();
    }
});

// Carrousel modal left and right arrows && sort function

(async () => {
    const data = await init();

    // Const left/right arrows
    const left = document.getElementById('left-arrow');
    const right = document.getElementById('right-arrow');
    const photos = data.media.filter(function (elt) {
        return elt.photographerId == id;
    });

    //Const sort function
    const popularity = document.getElementById('sort-popularity');
    const date = document.getElementById('sort-popularity');
    const title = document.getElementById('sort-title');

    left.addEventListener('click', function () {
        const lightbox = document.getElementById('lightbox');
        let index = lightbox.getAttribute('data-index');
        if (index >= 1) {
            index--;
            lightbox.setAttribute('data-index', index);
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const id = urlParams.get('myparam');
            const image = document.getElementById('lightboxImg');
            const imageExist = 'image' in photos[index];
            if (imageExist) {
                const img = document.getElementById('img-lightbox');
                img.style.display = 'flex';
                const video = document.getElementById('video-lightbox');
                video.style.display = 'none';
                const picture = `assets/media/${id}/${photos[index].image}`;
                image.src = picture;
            } else {
                const img = document.getElementById('img-lightbox');
                img.style.display = 'none';
                const video = document.getElementById('video-lightbox');
                video.style.display = 'flex';
                /*                 const video = `assets/media/${id}/${photos[index].video}`;
                image.src = video; */
            }
        }
    });
    right.addEventListener('click', function () {
        const lightbox = document.getElementById('lightbox');
        let index = lightbox.getAttribute('data-index');
        let j = photos.length;
        let i = index;
        if (i < j) {
            i++;
            index++;
            lightbox.setAttribute('data-index', index);
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const id = urlParams.get('myparam');
            const image = document.getElementById('lightboxImg');
            const imageExist = 'image' in photos[index];
            if (imageExist) {
                const img = document.getElementById('img-lightbox');
                img.style.display = 'flex';
                const video = document.getElementById('video-lightbox');
                video.style.display = 'none';
                const picture = `assets/media/${id}/${photos[index].image}`;
                image.src = picture;
            } else {
                const img = document.getElementById('img-lightbox');
                img.style.display = 'none';
                const video = document.getElementById('video-lightbox');
                video.style.display = 'flex';
                /*                 const video = `assets/media/${id}/${photos[index].video}`;
                image.src = video; */
            }
        }
    });

    // Sort function
    popularity.addEventListener('click', function () {
        photos.sort();
        console.log('test');
    });
    date.addEventListener('click', function () {});
    title.addEventListener('click', function () {});
})();
