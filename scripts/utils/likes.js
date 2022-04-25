//Deal with likes on the page

function incrementLike(id) {
    let bool = localStorage.getItem(`bool${id}`);
    if (bool === '1') {
        let totalLikesPage = localStorage.getItem('totalLikes');
        const elt = document.getElementById(id);
        let likes = parseInt(elt.innerHTML);
        likes++;
        elt.textContent = `${likes} \u2665`;
        let totalLikes = parseInt(totalLikesPage) + 1;
        localStorage.setItem('totalLikes', totalLikes);
        document.getElementById(
            'footer'
        ).innerHTML = `${totalLikes} \u2665 400€/jour`;
        localStorage.setItem(`bool${id}`, '2');
    } else if (bool === '2') {
        let totalLikesPage = localStorage.getItem('totalLikes');
        const elt = document.getElementById(id);
        let likes = parseInt(elt.innerHTML);
        likes--;
        elt.textContent = `${likes} \u2665`;
        let totalLikes = parseInt(totalLikesPage) - 1;
        localStorage.setItem('totalLikes', totalLikes);
        document.getElementById(
            'footer'
        ).innerHTML = `${totalLikes} \u2665 400€/jour`;
        localStorage.setItem(`bool${id}`, '1');
    } else {
        let totalLikesPage = localStorage.getItem('totalLikes');
        const elt = document.getElementById(id);
        let likes = parseInt(elt.innerHTML);
        likes++;
        elt.textContent = `${likes} \u2665`;
        let totalLikes = parseInt(totalLikesPage) + 1;
        localStorage.setItem('totalLikes', totalLikes);
        document.getElementById(
            'footer'
        ).innerHTML = `${totalLikes} \u2665 400€/jour`;
        localStorage.setItem(`bool${id}`, '2');
    }
}
