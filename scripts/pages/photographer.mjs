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

export function displayMedia(collection) {
    const mediaSection = document.querySelector('.photo_section');

    collection.forEach((media, i) => {
        const photographerMedia = mediaFactory(media, i);
        const userCardDOM = photographerMedia.getUserCardDOM();
        mediaSection.appendChild(userCardDOM);
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
    let totalLikes = localStorage.getItem('totalLikes');
    document.getElementById(
        'footer'
    ).innerHTML = `${totalLikes} \u2665 ${photographer.price}€/jour`;
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
    window.mydata = photos;
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

    // Store total likes
    function getLikes(photos) {
        let i = 0;
        let j = photos.length;
        let totalLikes = 0;
        while (i < j - 1) {
            i++;
            let likes = photos[i].likes;
            totalLikes += likes;
        }
        localStorage.setItem('totalLikes', totalLikes);
    }
    getLikes(photos);

    function leftArrow() {
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
            }
        }
    }

    function rightArrow() {
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
                const videoBox = document.getElementById('video-lightbox');
                videoBox.style.display = 'flex';
                const videoPath = `assets/media/${id}/${photos[index].video}`;
                const videoSource = document.getElementById('source-video');
                const videoMedia = document.getElementById('player-modal');
                videoSource.setAttribute('src', videoPath);
                videoMedia.load();
            }
        }
    }

    window.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            leftArrow();
        } else if (event.key === 'ArrowRight') {
            rightArrow();
        } else {
            return;
        }
    });

    left.addEventListener('click', leftArrow);
    right.addEventListener('click', rightArrow);
})();
