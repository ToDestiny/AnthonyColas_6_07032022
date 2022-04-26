//Deal with likes on the page

// eslint-disable-next-line no-unused-vars
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
            'footer-likes'
        ).innerHTML = `${totalLikes} \u2665`;
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
            'footer-likes'
        ).innerHTML = `${totalLikes} \u2665`;
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
            'footer-likes'
        ).innerHTML = `${totalLikes} \u2665`;
        localStorage.setItem(`bool${id}`, '2');
    }
}
