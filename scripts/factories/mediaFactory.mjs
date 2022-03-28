export function mediaFactory(data) {
    const { id, photographerId, title, image, likes, date, price } = data;

    const picture = `assets/media/${photographerId}/${image}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute('src', picture);
        const h4 = document.createElement('h4');
        h4.textContent = title;
        const h5 = document.createElement('h5');
        h5.textContent = likes;
        article.appendChild(img);
        article.appendChild(h4);
        article.appendChild(h5);
        return article;
    }
    return {
        id,
        photographerId,
        title,
        image,
        likes,
        date,
        price,
        getUserCardDOM,
    };
}
