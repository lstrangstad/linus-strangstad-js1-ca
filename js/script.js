const myUrl = "https://rickandmortyapi.com/api/character/";

fetch(myUrl)
  .then(Response => Response.json())
  .then(json => characterInfo(json))
  .catch(error => (document.location.href = "error.html"));

function characterInfo(json) {
  let data = json.results;

  const characterContainer = document.querySelector(".row");

  let html = "";

  data.forEach(result => {
    let characterUnknown = "Unknown";

    if (result.type) {
      characterUnknown = result.type;
    }

    html += `
  <div class="col-sm-6 col-md-4 col-lg-3">                
    <div class="card">    
      <img class="image" src="${result.image}" alt="${result.name}">
       <div class="details">
        <h4 class="name">${result.name}</h4>
        <p>Type: ${characterUnknown}</p>    
        <p>Episode count: ${result.episode.length}</p>                                  
        <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
      </div>
  </div>
</div>`;
  });
  characterContainer.innerHTML = html;
}
