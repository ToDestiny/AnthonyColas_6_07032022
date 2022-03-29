export function photographerFactory(data) {
    const { id, name, city, country, tagline, portrait, price } = data;

    const picture = `assets/photographers/${portrait}`;
    `photographer.html/${name}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const link = document.createElement('a');
        link.setAttribute('href', `photographer.html?myparam=${id}`);
        link.setAttribute('title', `Nouveau lien vers la page de ${name}`);
        link.setAttribute('aria-label', `Nouveau lien vers la page de ${name}`);
        const img = document.createElement('img');
        img.setAttribute('src', picture);
        img.setAttribute('alt', `Photo de ${name}`);
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const h3 = document.createElement('h3');
        h3.textContent = `${city}, ${country}`;
        const h4 = document.createElement('h4');
        h4.textContent = tagline;
        const h5 = document.createElement('h5');
        h5.textContent = `${price}€/jour`;
        article.appendChild(link);
        link.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(h5);
        return article;
    }
    return { id, name, city, country, picture, tagline, price, getUserCardDOM };
}
