import { displayMedia } from '../pages/photographer.mjs';

let x, i, j, l, ll, selElmnt, a, b, c;

// Sort function
function sortMedia(value) {
    if (value === 'Date') {
        return window.mydata.sort(
            (a, b) => new Date(a.date) - new Date(b.date)
        );
    }
    if (value === 'Titre') {
        return window.mydata.sort((a, b) => a.title.localeCompare(b.title));
    } else return window.mydata.sort((a, b) => b.likes - a.likes);
}
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName('photo_filter');
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName('select')[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement('DIV');
    a.setAttribute('class', 'select-selected');
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement('DIV');
    b.setAttribute('class', 'select-items select-hide');
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
    create a new DIV that will act as an option item: */
        c = document.createElement('DIV');
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener('click', function () {
            /* When an item is clicked, update the original select box,
        and the selected item: */
            let y, i, k, s, h, sl, yl, o;
            s = this.parentNode.parentNode.getElementsByTagName('select')[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    o = this.innerHTML;
                    console.log(o);
                    y =
                        this.parentNode.getElementsByClassName(
                            'same-as-selected'
                        );
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute('class');
                    }
                    this.setAttribute('class', 'same-as-selected');
                    break;
                }
            }
            console.log(o);
            const sortedMedia = sortMedia(o);
            console.log(sortedMedia);
            document.getElementById('photo-booth').innerHTML = '';
            displayMedia(sortedMedia);
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener('click', function (e) {
        /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
        console.log(e);
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle('select-hide');
        this.classList.toggle('select-arrow-active');
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
  except the current select box: */
    let x,
        y,
        i,
        xl,
        yl,
        arrNo = [];
    x = document.getElementsByClassName('select-items');
    y = document.getElementsByClassName('select-selected');
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i);
        } else {
            y[i].classList.remove('select-arrow-active');
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add('select-hide');
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener('click', closeAllSelect);
