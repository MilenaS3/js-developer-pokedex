const variables = {
    pokemonSelected: null
};
const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const limit = 6;
let offset = 0;
const maxRecords = 151;
const detailButton = document.getElementById("goToDetail");
let pokemonSelected = null;

loadPokemonItens(offset, limit);

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => { 
    const newHtml = pokemons.map((pokemon) => `
                <li class="pokemon ${pokemon.type}" id="${pokemon.number}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                    <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                        
                        <img src="${pokemon.photo}" 
                    alt="${pokemon.name}">
                    </div>
                </li>
            `).join('');
            pokemonList.innerHTML += newHtml;
})
}

function loadDetails(pokemonSelected) {
    pokeApi.convertPokeApiDetailPokemon(pokemonSelected).then((pokemon) => {
    const htmlDetails = `
                <h1>${pokemon.name}</h1>
                <li class="pokemon ${pokemon.type}" id="${pokemon.number}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                    <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    </div>
                </li>
                `});
            pokemonInformation.innerHTML += htmlDetails;
    }



loadMoreButton.addEventListener('click', () => {
    offset += limit;
    debugger
    const qtdRecord = offset + limit;
    if(qtdRecord >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
    loadPokemonItens(offset, limit);
    }
})


pokemonList.addEventListener('click', (event) => {
    const pokemonLi = event.target.closest('.pokemon');
    if (pokemonLi) {
        document.querySelectorAll('.pokemon').forEach(li => li.classList.remove('selected'));
        pokemonLi.classList.add('selected');
        variables.pokemonSelected = pokemonLi.id; 
    }
});

detailButton.addEventListener('click', () => {
    if (variables.pokemonSelected) {
        window.location.href = `detail.html?id=${variables.pokemonSelected}`;
    } else {
        alert('Selecione um Pokémon para ver os detalhes.');
    }
});





