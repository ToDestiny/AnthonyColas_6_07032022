//Mettre le code JavaScript lié à la page photographer.html
import * as Index from './index.mjs';

const data = Index.getDataApi();
console.log(data);
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('myparam');
console.log(id);
