//Question 2

const key = "57c27ce3640540d3b4d65f5802d59b7c";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${key}`;

const resultsContainer = document.querySelector(".container");

async function APIcall() {
  try {
    const response = await fetch(url);

    const { results } = await response.json();

    resultsContainer.innerHTML = "";

    for (let i = 0; i <= 7; i++) {
      resultsContainer.innerHTML += `<div class="result">
      <h3>Name: ${results[i].name}</h3>
      <p>Rating: ${results[i].rating}</p>
      <p>Number of tags: ${results[i].tags.length}</p>
      </div>
      `;
    }
  } catch (error) {
    resultsContainer.innerHTML = displayError("An error occured");
  }
}

APIcall();
