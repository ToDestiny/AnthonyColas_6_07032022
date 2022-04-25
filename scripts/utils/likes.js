//Deal with likes on the page
let test = localStorage.setItem('bool', '1');
console.log(test);

function incrementLike(id) {
    let bool = localStorage.getItem('bool');
    console.log(bool);
    if (bool === '1') {
        console;
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
        localStorage.setItem('bool', '2');
    } else {
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
        localStorage.setItem('bool', '1');
    }
}
