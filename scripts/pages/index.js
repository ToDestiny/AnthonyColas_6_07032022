async function getPhotographers () {
  // Penser à remplacer par les données récupérées dans le json
  const data = fetch('../data/PhotographersApi.json')
    .then(response => {
      console.log(response)
      if (response.ok) { return response.json() } else { throw Error('ERROR FETCH') }
    })
    .then(data => {
      console.log(data)
      console.log(data.photographers)
      return data
    })
    .catch(error => {
      console.log(error)
    })
  return data
}

async function displayData(photographers) {
  console.log("photographers")
  console.log(photographers)
  const photographersSection = document.querySelector('.photographer_section')

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
};

async function init () {
  // Récupère les datas des photographes
  const data = await getPhotographers()
  console.log(data)
  displayData(data.photographers)
};

console.log("4" + 2);
init()
