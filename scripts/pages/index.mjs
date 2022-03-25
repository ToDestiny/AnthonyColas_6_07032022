import { photographerFactory } from '../factories/photographer.mjs';

export async function getDataApi() {
    // Penser à remplacer par les données récupérées dans le json
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

export async function displayData(photographers) {
    const photographersSection = document.querySelector(
        '.photographer_section'
    );

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

export async function init() {
    // Récupère les datas des photographes
    const data = await getDataApi();
    displayData(data.photographers);
}

init();
