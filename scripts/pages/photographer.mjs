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

function displayPhotographer(photographer) {
    console.log(photographer);
    const photoSection = document.querySelector('.photo_section');

    photographer.forEach((media) => {
        const photographerPhoto = mediaFactory(media);
        const userCardDOM = photographerPhoto.getUserCardDOM();
        photoSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const data = await getData();
    const photographer = data.photographers.filter(function (number) {
        return number.id == id;
    });
    const photos = data.media.filter(function (elt) {
        return elt.photographerId == id;
    });
    console.log(photos);
    displayPhotographer(photographer);
}

init();
