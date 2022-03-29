export function mediaFactory(data) {
    const { id, photographerId, title, image, likes, date, price } = data;

    const picture = `assets/media/${photographerId}/${image}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute('src', picture);
        img.setAttribute('alt', `Photo ${image}`);
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.flexDirection = 'row';
        div.style.justifyContent = 'space-between';
        div.style.alignContent = 'center';
        div.style.marginTop = '-30px';
        const h4 = document.createElement('h4');
        h4.textContent = title;
        h4.style.color = '#901C1C';
        h4.style.fontSize = '24px';
        const h5 = document.createElement('h5');
        h5.style.fontSize = '16px';
        h5.style.marginTop = '35px';
        h5.style.fontSize = '16px';
        h5.style.marginTop = '35px';
        h5.style.color = '#911C1C';
        h5.textContent = `${likes} \u2665`;
        article.appendChild(img);
        article.appendChild(div);
        div.appendChild(h4);
        div.appendChild(h5);
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
