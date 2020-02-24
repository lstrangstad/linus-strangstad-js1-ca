const fullUrl = document.location.search;

const params = new URLSearchParams(fullUrl);

const loadId = params.get("id");

const apiUrl = "https://rickandmortyapi.com/api/character/" + loadId;

console.dir(apiUrl);

fetch(apiUrl)
  .then(response => response.json())
  .then(json => outputUser(json))
  .catch(() => (document.location.href = "error.html"));

function outputUser(json) {
  document.title = json.name;

  const name = document.querySelector("h1");
  name.innerHTML = json.name;

  const image = document.querySelector(".details-image");
  image.src = json.image;
  image.alt = json.name;

  const status = document.querySelector("#status");
  status.innerHTML = json.status;

  const species = document.querySelector("#species");
  species.innerHTML = json.species;

  const originName = document.querySelector("#origin");
  originName.innerHTML = json.origin.name;

  const locationName = document.querySelector("#location");
  locationName.innerHTML = json.location.name;
}
