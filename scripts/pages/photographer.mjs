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

    photos.forEach((media) => {
        const photographerPhoto = mediaFactory(media);
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

function displayFooter(media) {
    document.getElementById('footer').innerHTML = `${media.likes}`;
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

    displayInfo(photographer[0]);
    displayFooter(photographer[0]);
    displayMedia(photos);
    displayFormName(photographer[0]);
}

init();
