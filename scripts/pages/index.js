async function getPhotographers () {
  // Penser à remplacer par les données récupérées dans le json
  const data = fetch('../data/PhotographersApi.json')
    .then(response => {
      if (response.ok) { return response.json() } else { throw Error('ERROR FETCH') }
    })
    .then(data => {
      return data
    })
    .catch(error => {
      console.log(error)
    })
  return data
}

async function displayData(photographers) {
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
  displayData(data.photographers)
};

init()
